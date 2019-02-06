/**
 * jspsych-s2stim
 * Sven2
 * Based on muli-stim-multi-response by Josh de Leeuw
 *
 * plugin for displaying a set of stimuli and collecting a set of responses
 * via the keyboard
 *
 * documentation: docs.jspsych.org
 *
 **/
(function($) {
  jsPsych["s2stim"] = (function() {

    var plugin = {};

    plugin.create = function(params) {

      var trials = new Array(params.stimuli.length);
      //console.log('trial count ' + trials.length);

      for (var i = 0; i < trials.length; i++) {
        trials[i] = {};
        trials[i].init_fn = params.init_fn;
        trials[i].stimulus = params.stimuli[i];
        trials[i].choices = params.choices;
        trials[i].onset_index = params.onset_index;
        trials[i].answer_show_time = params.answer_show_time;
        trials[i].answer_strings = params.answer_strings;
        trials[i].correct_answer = params.correct_answers[i];
        trials[i].max_response_times = [];
        // option to show image for fixed time interval, ignoring key responses
        //    true = image will keep displaying after response
        //    false = trial will immediately advance when response is recorded
        trials[i].response_ends_trial = (typeof params.response_ends_trial === 'undefined') ? true : params.response_ends_trial;
        // optional parameters
        trials[i].prompt = (typeof params.prompt === 'undefined') ? "" : params.prompt;
        trials[i].timeout_message = (typeof params.timeout_message === 'undefined') ? "" : params.timeout_message;
        trials[i].base_html = params.base_html;
      }
      return trials;
    };



    plugin.trial = function(display_element, trial) {

      // Trial custom init
      //console.log('init_fn = ' + trial.init_fn);
      if (typeof trial.init_fn == "function") {
        trial.init_fn.call(this, trial);
      }

      // if any trial variables are functions
      // this evaluates the function and replaces
      // it with the output of the function
      trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

      // this array holds handlers from setTimeout calls
      // that need to be cleared if the trial ends early
      var setTimeoutHandlers = [];

      // response data for trial
      var responseValid = false;
      var responseTime = -1;
      var responseVideoFrame = -1;
      var responseKey = -1;
      var responseIndex = -1;

      var keyboardListener;
      var trial_was_timeout = false;

      var vid_element, vidsrc_element;

      // function to end trial when it is time
      var end_trial = function() {

        // kill keyboard listeners
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener)

        // kill any remaining setTimeout handlers
        for (var i = 0; i < setTimeoutHandlers.length; i++) {
          clearTimeout(setTimeoutHandlers[i]);
        }

        // gather the data to store for the trial
        var trial_data = {
          "rt": responseTime,
          "rtvid": responseVideoFrame,
          "stimulus": JSON.stringify(trial.stimulus),
          "key_press": responseKey,
          "response": responseIndex,
          "true_response": trial.correct_answer,
          "trial_duration": trial.stimulus.duration,
          "answer_string": trial.answer_strings,
          "answer_keys": trial.stimulus.answer_keys,
          "answer_codes": trial.stimulus.answer_codes
        };

        jsPsych.data.write(trial_data);
      };

      var next_trial = function() {
        // clear the display
        display_element.html(trial.base_html);
        // move on to the next trial
        jsPsych.finishTrial();
      }

      // function to handle responses by the subject
      var after_response = function(info) {
        if (responseValid) return; // ignore duplicate keys
        for (var j = 0; j < trial.choices.length; j++) {
          keycode = (typeof trial.choices[j] == 'string') ? jsPsych.pluginAPI.convertKeyCharacterToKeyCode(trial.choices[j]) : trial.choices[j];
          if (info.key == keycode) {
            responseIndex = j;
            break;
          }
        }

        responseValid = true;
        responseTime = info.rt;
        responseVideoFrame = vid_element.currentTime * 1000 - trial.stimulus.onset;
        responseKey = info.key;

        if (trial.response_ends_trial) {
          end_trial();
          if (trial.answer_show_time) showAnswer(); else next_trial();
        }

      };

      // flattened version of the choices array
      var allchoices = [];
      for (var i = 0; i < trial.choices.length; i++) {
        allchoices = allchoices.concat(trial.choices[i]);
      }

      function prepareStimulus() {
        // display stimulus: Create display video element
        display_element.html(trial.base_html);
        display_element.append($('<video>', {
          width: trial.stimulus.width,
          height: trial.stimulus.height,
          poster: "/static/images/fix.png",
          id: 'jspsych-s2stim',
          style: 'visibility: hidden;'
        }));
        vid_element = document.getElementById('jspsych-s2stim');
        vidsrc_element = document.createElement('source');
        vid_element.appendChild(vidsrc_element);
        vid_element.preload = 'auto';
        vid_element.oncanplaythrough = showStimulus;

        //show prompt if there is one
        if (trial.prompt !== "") {
          display_element.append(trial.prompt);
        }

        // start loading!
        vidsrc_element.src = trial.stimulus.stimulus;
      }

      function showStimulus() {
	// schedule starting the keyboard listener for answer
	var tc = setTimeout(function() {
		// start the response listener
		keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
		  callback_function: after_response,
		  valid_responses: allchoices,
		  rt_method: 'date',
		  persist: true,
		  allow_held_key: false
		});
          }, trial.stimulus.onset);
        setTimeoutHandlers.push(tc);
        // start stimulus video!
        vid_element.style.visibility = 'visible';
        vid_element.play();
        // trial timeout
        if (trial.stimulus.duration > 0)
        {
          var tc = setTimeout(showTimeout, trial.stimulus.duration);
          setTimeoutHandlers.push(tc);
        }
        //display_element.html('');
        // $('#jspsych-s2stim').css('visibility', 'hidden');
        // end_trial
      }

      // user wasn't fast enough
      function showTimeout()
      {
        trial_was_timeout = true;
        end_trial();
        if (trial.timeout_message !== "") {
          display_element.html(trial.base_html);
          display_element.append(trial.timeout_message);
          keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: skipTimeoutScreen,
            valid_responses: [],
            rt_method: 'date',
            persist: false,
            allow_held_key: false
          });
        }
        else
        {
          next_trial();
        }
      }

      // user skipped "too slow screen"
      function skipTimeoutScreen()
      {
        // kill keyboard listeners
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener)
        next_trial();
      }

      // user answered. show feedback.
      function showAnswer()
      {
        display_element.html(trial.base_html);
        display_element.append("<table id='ctrtable'><tr><td><p>You answered:<br><strong>"+trial.answer_strings[responseIndex]+"</strong></p></td></tr></table>");
        setTimeout(next_trial, trial.answer_show_time);
      }

      // initiate stimulus image loading + schedule show
      prepareStimulus();

    };

    return plugin;
  })();
})(jQuery);



/*          case 'img':
            display_element.append($('<img>', {
              src: trial.stimulus,
              id: 'jspsych-s2stim'
            }));
            break;
          case 'html':
            display_element.append($('<div>', {
              html: trial.stimulus,
              id: 'jspsych-s2stim'
            }));
            break;*/
//$('#jspsych-s2stim').css('visibility', 'hidden');
