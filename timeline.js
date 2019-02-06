/* create timeline */
var timeline = [];
var index = 0;

var csvfile = '';
var lperm_id = 0;
var fperm_id = 0;
var rtime = 0;

var static_stimuli = [
    { stimulus: '<video width="256" height="256" autoplay > <source src="./home/kalpit/cnist-new/vids/1/baseline-_imgs_11_sample_32/1000-750.webm"> </video>',
        data: { part: 'base', correct_response: 'yes' }, correct_key: 189 },
];
var exp_stimuli = [ [], [], [] ];
var base = [];

var setup1 = {
    type: "call-function",
    func: getExperimentIndex,
};

var setup2 = {
    type: "call-function",
    func: getExperimentDataCSV,
};

timeline.push(setup1);
timeline.push(setup2);

/* define welcome message trial */
var welcome = {
    type: "html-keyboard-response",
    stimulus: "Welcome to the experiment. Press any key to begin.",
};
timeline.push(welcome);

var setup3 = {
    type: "call-function",
    func: readStimuli,
};
timeline.push(setup3);

var consent = {
    type: 'external-html',
    url: 'consent.html',
    cont_btn: 'agree',
};
timeline.push(consent);

var instructions = {
    type: "html-keyboard-response",
    stimulus: "<p> You will make decisions about a series of images. Each image has two letters and two circles. " +
    "Your task is to decide whether the two circles are on the <strong>same</strong> or <strong>different</strong> letters.</p>" +
    "<p>If the circles are on the same letter, press <strong>-</strong>. If the circles are on different letters, press <strong>+</strong>.</p>" +
    "<p>(Do not use the keys on numpad. No need to press SHIFT key for <strong>+</strong>. Just press the keys with <strong>+</strong> and <strong>-</strong>).</p>" +
    "<p><strong> Do your best to respond as quickly as possible.</strong></p>" +
    "<p>The experiment is split into two phases. You will first complete a practice session, consisting of twelve images, in which you will get " +
    "feedback on your performance. Next, you will complete the main experiment, where you will not get any feedback. The main experiment has " +
    "150 images, split into 5 blocks. You will get a chance to rest between each block.</p>" +
    "<p>Press any key to begin.</p>", 
    post_trial_gap: 2000,

    on_finish: function() {
        console.log(JSON.stringify(exp_stimuli[0]));
    }
};
timeline.push(instructions);

var response_types = {
    'normal': {'yes': 187, 'no': 189},
    'inverted': {'yes': 189, 'no': 187}
};
var exp_type = ['normal', 'inverted'];

var width = "256";
var height = "256";

var subject_id = jsPsych.randomization.randomID(15);
var basename = "experiment_data-";
var save_filename = basename.concat(subject_id);
jsPsych.data.addProperties({
    SubjectID: save_filename
});

var rest1 = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:30px;"> <p> Practice session is now complete.</p>You will now begin the main experiment. There are 5 phases, each with 30 images. ' +
        'You will have a chance to REST between two phases.</p> <p>Press any key to begin the main experiment </p> </div>',
    data: { part: 'rest' }
};

var rest2 = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 1 is now complete. Press any key to begin next split </p> </div>',
    data: { part: 'rest' }
};

var rest3 = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 2 is now complete. Press any key to begin next split </p> </div>',
    data: { part: 'rest' }
};

var rest4 = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 3 is now complete. Press any key to begin next split </p> </div>',
    data: { part: 'rest' }
};

var test_block = {
    type: "categorize-html",
    stimulus: jsPsych.timelineVariable('stimulus'),
    choices: [187, 189],
    data: jsPsych.timelineVariable('data'),
    key_answer: jsPsych.timelineVariable('correct_key'),
    correct_text: "<p class='prompt'> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
    incorrect_text: "<p class='prompt'> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
    stimulus_duration: jsPsych.timelineVariable('stimulus_duration'),
    trial_duration: jsPsych.timelineVariable('trial_duration'),
    feedback_duration: 0,
    prompt: "<p> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
};

var proto_block = {
    type: "categorize-html",
    stimulus: [],
    choices: [187, 189],
    data: [],
    key_answer: [],
    correct_text: "<p class='prompt'> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
    incorrect_text: "<p class='prompt'> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
    stimulus_duration: 1000,
    trial_duration: 1000,
    feedback_duration: 0,
    prompt: "<p> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
};

function createBaseBlock() {

    for(var i = 0; i < exp_stimuli[0].length; i++) {
        var t_block = Object.create(proto_block);
        t_block.stimulus = exp_stimuli[0][i].stimulus;
        t_block.data = exp_stimuli[0][i].data;
        t_block.key_answer = exp_stimuli[0][i].correct_key;

        t_block.type = proto_block.type;
        t_block.choices = proto_block.choices;
        t_block.correct_text = proto_block.correct_text;
        t_block.incorrect_text = proto_block.incorrect_text;
        t_block.stimulus_duration = proto_block.stimulus_duration + rtime;
        t_block.trial_duration = proto_block.trial_duration + rtime;
        t_block.feedback_duration = proto_block.feedback_duration;
        t_block.prompt = proto_block.prompt;
        console.log(t_block);

        base[i] = t_block;
    }
    console.log(base);
};

var test_base = {
    timeline: [test_block],
    timelineVariables: base,
    randomize_order: true
};
timeline.push(test_base);
timeline.push(rest2);
/*
var test_procedure2 = {
    timeline: [test],
    timeline_variables: exp_stimuli.slice(30, 60),
    randomize_order: true,
};
timeline.push(test_procedure2);
timeline.push(rest3);

var test_procedure3 = {
    timeline: [test],
    timeline_variables: exp_stimuli.slice(60, 90),
    randomize_order: true,
};
timeline.push(test_procedure3);
timeline.push(rest4);
*/

var thanks = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:30px;"> <p> The entire experiment is now complete. Thank you very much for your time. </p>' +
            '<p> You will now see a page with your unique code. Make sure to copy it and paste it on your mechanical turk page. </p> </div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 6000,
    data: { part: 'thanks' },
    /*on_finish: function() {
        // call the saveData function after the experiment is over
        var raw_data = jsPsych.data.get().values()[0];
        console.log(raw_data.workerid);
        var workerid = raw_data.workerid;
        var assignmentid = raw_data.assignmentid;
        var hitid = raw_data.hitid;
        var turksub = raw_data.turksubmit;
        // jsPsych.data.displayData();
        // jsPsych.data.get().localSave('csv', save_filename.concat('.csv'));
        saveData(save_filename, jsPsych.data.get().csv(), subject_id, workerid, assignmentid, hitid, turksub);
    }*/
};

timeline.push(thanks);

var pastecode = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:20px;"> <p> <strong> Your unique code: </strong> ' + subject_id +
            '</p> Paste this on the Mechanical Turk page and press Submit to complete the experiment. ' +
            'Once you are done submitting, you can safely close this tab. </p> </div>',
    data: { part: 'code' }
};

//timeline.push(pastecode);

/* Get the index so as to set up the experiment data accordingly */
function getExperimentIndex() {
    xhr = new XMLHttpRequest();
    xhr.open('POST','./get_index.php',true);          // File to get the index to set experiment data
    
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if(response['idx']) {
                index = parseInt(response['idx']);
            }
            console.log(response);
        }
        else {
            console.log("Some problem with response");
        }
    }
    xhr.send();
}

/* Insert the new subject ID who completed the experiment to update the overall index */
function setExperimentIndex(index, subject_id) {
    xhr = new XMLHttpRequest();
    xhr.open('POST','./set_index.php',true);          // File to get the index to set experiment data
    
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onlod = function() {
        if(xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            if(response['idx']) {
                index = parseInt(response['idx']);
            }
            console.log(response);
        }
        else {
            console.log("Some problem with response");
        }
    }
    xhr.send();
}

function getExperimentDataCSV() {
    xhr = new XMLHttpRequest();
    xhr.open('POST','./get_exp.php',true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            csvfile = response['filepath'];
            lperm_id = parseInt(response['level_perm_id']);
            fperm_id = parseInt(response['finger_perm_id']);
            rtime = parseInt(response['rtime']);
        }
        else {
            console.log("Some problem with response");
        }
    }
    xhr.send(JSON.stringify({idx: index+1}));
}

function readStimuli() {
    var rawFile = new XMLHttpRequest();
    while(csvfile.charAt(0) === '/')
    {
        csvfile = csvfile.substr(1);
    }
    console.log(csvfile);
    rawFile.open('GET',csvfile,true);

    rawFile.onreadystatechange = function() {
        if(rawFile.readyState == 4) {
            if (rawFile.status == 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                console.log(allText);
                var lines = $.csv.toObjects(allText);
                //console.log(lines);

                var block_length = lines.length / 3;
                /* Create the experiment blocks */
                for(var i = 0; i < 3; i++) {
                    var stim = [];
                    for(var j = i*block_length; j < (i+1)*block_length; j++) {
                        //console.log(lines[j].level);
                        //console.log(lines[j].sample_gt);
                        //console.log(lines[j].sample_path);
                        var valueToPush = { };
                        var dataPart = { };
                        dataPart.part = lines[j].level;
                        dataPart.correct_response = lines[j].sample_gt;
                        valueToPush.stimulus = '<video width='+width+' height='+height+' autoplay > <source src=".'+lines[j].sample_path+'"> </video>'
                        valueToPush.data = dataPart;
                        valueToPush.correct_key = parseInt(response_types[exp_type[fperm_id - 1]][lines[j].sample_gt]);
                        stim.push(valueToPush);
                    }
                    exp_stimuli[i] = stim;
                }
                createBaseBlock();
                //console.log(exp_stimuli);
            }
        }
    }
    rawFile.send(null);
}

/* start the experiment */
jsPsych.init({
    timeline: timeline,
    on_finish: function() {
        jsPsych.data.addProperties({
            exp_idx: index,
            csvfile: csvfile,
            lid: lperm_id,
            fid: fperm_id,
            rtime: rtime,
            stim: exp_stimuli,
        });
        jsPsych.data.displayData();
    }
});

