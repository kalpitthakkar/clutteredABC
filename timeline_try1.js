/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome = {
	type: "html-keyboard-response",
	stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

var consent = {
	type: 'external-html',
	url: 'consent.html',
	cont_btn: 'agree'
}
timeline.push(consent);

jsPsych.data.addProperties({
	rt_hand: 'left'
})

var response_types = {
	'normal': {'yes': 187, 'no': 189},
	'inverted': {'yes': 189, 'no': 187}
}
var exp_type = 'normal'

var width = "350"
var height = "350"

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
};
timeline.push(instructions);

/* train trials */
var train_stimuli = [
    { stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_47_sample_2836/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_45_sample_723/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_46_sample_948/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_3_sample_791/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_11_sample_713/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_19_sample_285/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_32_sample_3480/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_20_sample_2225/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_14_sample_3934/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_5_sample_2136/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_50_sample_1072/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_19_sample_1255/1000-750.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
];
/*
var train_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_47_sample_2836/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_45_sample_723/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_46_sample_948/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/baseline-_imgs_3_sample_791/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_11_sample_713/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_19_sample_285/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_32_sample_3480/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix1-_imgs_20_sample_2225/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_5_sample_2136/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_50_sample_1072/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_19_sample_1255/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/train/ix2_imgs_14_sample_3934/1000-1000.webm"> </video>' , data: { part: 'train', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
*/

/* test trials: split[1-5] */
var split1_stimuli = [
    { stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_23_sample_3871/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_7_sample_70/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_14_sample_1652/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_31_sample_2861/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_30_sample_1741/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_39_sample_594/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_21_sample_404/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_15_sample_1206/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_5_sample_3232/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_43_sample_479/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_27_sample_814/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_17_sample_1677/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_33_sample_1775/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_21_sample_3285/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_38_sample_1164/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_23_sample_2103/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_30_sample_3071/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_42_sample_890/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_34_sample_1454/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_45_sample_50/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_5_sample_1119/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_46_sample_3869/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_42_sample_873/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_25_sample_403/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_49_sample_1175/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_14_sample_3196/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_6_sample_348/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_11_sample_2326/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_16_sample_1609/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_10_sample_641/1000-750.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
/*
var split1_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_14_sample_1652/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_23_sample_3871/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_31_sample_2861/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_30_sample_1741/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_39_sample_594/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_21_sample_404/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_7_sample_70/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_15_sample_1206/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_5_sample_3232/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_43_sample_479/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_27_sample_814/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_17_sample_1677/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_33_sample_1775/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_21_sample_3285/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_38_sample_1164/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_23_sample_2103/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_30_sample_3071/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_42_sample_890/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_34_sample_1454/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_45_sample_50/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_5_sample_1119/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_46_sample_3869/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_42_sample_873/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix1-_imgs_25_sample_403/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_49_sample_1175/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_14_sample_3196/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_6_sample_348/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_11_sample_2326/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/ix2_imgs_16_sample_1609/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split1/baseline-_imgs_10_sample_641/1000-1000.webm"> </video>' , data: { part: 'split1', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
*/
var split2_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_8_sample_325/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_6_sample_1521/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_24_sample_1125/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_20_sample_2032/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_14_sample_2888/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_12_sample_3564/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_5_sample_1699/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_40_sample_3981/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_31_sample_3306/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_39_sample_3793/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_49_sample_3721/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_41_sample_3704/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_17_sample_3349/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_46_sample_2276/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_17_sample_343/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_18_sample_2761/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_24_sample_3460/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_15_sample_256/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_27_sample_2680/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_32_sample_1884/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_37_sample_1448/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_30_sample_744/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_39_sample_2373/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_5_sample_2621/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_35_sample_162/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_25_sample_2319/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_47_sample_557/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_24_sample_3814/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_5_sample_3936/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_29_sample_2259/1000-750.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
/*
split2_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_8_sample_325/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_6_sample_1521/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_24_sample_1125/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_20_sample_2032/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_14_sample_2888/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_12_sample_3564/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_5_sample_1699/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_40_sample_3981/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_31_sample_3306/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_39_sample_3793/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_49_sample_3721/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_41_sample_3704/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_17_sample_3349/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_46_sample_2276/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_17_sample_343/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_18_sample_2761/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_24_sample_3460/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_15_sample_256/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_27_sample_2680/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/baseline-_imgs_32_sample_1884/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_37_sample_1448/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_30_sample_744/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_39_sample_2373/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_5_sample_2621/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_35_sample_162/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_25_sample_2319/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_47_sample_557/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_24_sample_3814/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix2_imgs_5_sample_3936/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split2/ix1-_imgs_29_sample_2259/1000-1000.webm"> </video>' , data: { part: 'split2', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
*/
var split3_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_25_sample_2504/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_44_sample_2196/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_26_sample_486/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_37_sample_307/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_35_sample_385/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_32_sample_2262/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_1_sample_3471/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_4_sample_2726/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_16_sample_992/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_36_sample_3957/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_19_sample_471/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_30_sample_3644/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_32_sample_1174/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_22_sample_259/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_13_sample_1083/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_48_sample_105/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_39_sample_2498/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_11_sample_3367/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_25_sample_675/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_18_sample_1032/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_33_sample_3126/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_50_sample_3500/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_3_sample_97/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_50_sample_3001/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_7_sample_2967/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_16_sample_1448/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_19_sample_3369/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_9_sample_2100/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_4_sample_3785/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_47_sample_3441/1000-750.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
/*
var split3_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_25_sample_2504/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_44_sample_2196/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_26_sample_486/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_37_sample_307/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_35_sample_385/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_32_sample_2262/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_1_sample_3471/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_4_sample_2726/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_16_sample_992/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_36_sample_3957/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_19_sample_471/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_30_sample_3644/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_32_sample_1174/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_22_sample_259/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_13_sample_1083/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_48_sample_105/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_39_sample_2498/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_11_sample_3367/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_25_sample_675/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_18_sample_1032/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_33_sample_3126/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_50_sample_3500/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_3_sample_97/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_50_sample_3001/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_7_sample_2967/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix2_imgs_16_sample_1448/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_19_sample_3369/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_9_sample_2100/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/ix1-_imgs_4_sample_3785/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split3/baseline-_imgs_47_sample_3441/1000-1000.webm"> </video>' , data: { part: 'split3', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
*/
var split4_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_42_sample_1048/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_37_sample_811/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_43_sample_1210/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_47_sample_3890/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_20_sample_214/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_10_sample_3899/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_22_sample_3200/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_47_sample_2325/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_8_sample_789/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_7_sample_2856/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_15_sample_2534/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_46_sample_1553/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_19_sample_1475/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_41_sample_1901/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_33_sample_3978/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_49_sample_2987/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_15_sample_3605/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_4_sample_1487/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_26_sample_2176/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_18_sample_3269/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_35_sample_510/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_28_sample_3351/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_43_sample_213/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_7_sample_1291/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_22_sample_2845/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_12_sample_1373/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_44_sample_3227/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_12_sample_245/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_34_sample_3216/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_26_sample_1837/1000-750.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
];
/*
var split4_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_42_sample_1048/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_37_sample_811/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_43_sample_1210/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_47_sample_3890/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_20_sample_214/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_10_sample_3899/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_22_sample_3200/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_47_sample_2325/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_8_sample_789/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_7_sample_2856/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_15_sample_2534/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_46_sample_1553/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_19_sample_1475/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_41_sample_1901/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_33_sample_3978/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_49_sample_2987/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_15_sample_3605/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_4_sample_1487/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_26_sample_2176/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_18_sample_3269/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_35_sample_510/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_28_sample_3351/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_43_sample_213/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_7_sample_1291/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_22_sample_2845/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_12_sample_1373/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_44_sample_3227/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix2_imgs_12_sample_245/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/ix1-_imgs_34_sample_3216/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split4/baseline-_imgs_26_sample_1837/1000-1000.webm"> </video>' , data: { part: 'split4', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
];
*/
var split5_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_14_sample_3773/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_27_sample_3705/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_14_sample_2419/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_23_sample_720/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_41_sample_1699/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_34_sample_3095/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_25_sample_568/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_31_sample_2289/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_16_sample_2308/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_2_sample_1976/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_3_sample_2617/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_45_sample_3850/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_1_sample_1280/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_30_sample_3243/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_20_sample_170/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_41_sample_3046/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_47_sample_3096/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_39_sample_2989/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_46_sample_3267/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_48_sample_3904/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_47_sample_2684/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_27_sample_3963/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_20_sample_3053/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_8_sample_1942/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_27_sample_3095/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_8_sample_3463/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_48_sample_2089/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_40_sample_1005/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_24_sample_754/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_10_sample_2084/1000-750.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
/*
var split5_stimuli = [
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_14_sample_3773/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_27_sample_3705/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_14_sample_2419/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_23_sample_720/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_41_sample_1699/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_34_sample_3095/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_25_sample_568/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_31_sample_2289/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_16_sample_2308/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_2_sample_1976/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_3_sample_2617/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_45_sample_3850/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_1_sample_1280/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_30_sample_3243/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_20_sample_170/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_41_sample_3046/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_47_sample_3096/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_39_sample_2989/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_46_sample_3267/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_48_sample_3904/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_47_sample_2684/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_27_sample_3963/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_20_sample_3053/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_8_sample_1942/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_27_sample_3095/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_8_sample_3463/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_48_sample_2089/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'yes'}, correct_key: response_types[exp_type]['yes'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/baseline-_imgs_40_sample_1005/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix2_imgs_24_sample_754/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
	{ stimulus: '<video width='+width+' height='+height+' autoplay > <source src="img/split5/ix1-_imgs_10_sample_2084/1000-1000.webm"> </video>' , data: { part: 'split5', correct_response: 'no'}, correct_key: response_types[exp_type]['no'] },
];
*/

var subject_id = jsPsych.randomization.randomID(15);
var basename = "experiment_data-"
var save_filename = basename.concat(subject_id);
jsPsych.data.addProperties({
	SubjectID: save_filename
})

var rest1 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Practice session is now complete.</p>You will now begin the main experiment. There are 5 phases, each with 30 images. ' +
        'You will have a chance to REST between two phases.</p> <p>Press any key to begin the main experiment </p> </div>',
	data: { part: 'rest' }
}

var rest2 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 1 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var rest3 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 2 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var rest4 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 3 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var rest5 = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> Main experiment - split 4 is now complete. Press any key to begin next split </p> </div>',
	data: { part: 'rest' }
}

var thanks = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:30px;"> <p> The entire experiment is now complete. Thank you very much for your time. </p>' +
			'<p> You will now see a page with your unique code. Make sure to copy it and paste it on your mechanical turk page. </p> </div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 6000,
	data: { part: 'thanks' },
	on_finish: function() {
		// call the saveData function after the experiment is over
		var raw_data = jsPsych.data.get().values()[0];
		console.log(raw_data.workerid);
		var workerid = raw_data.workerid;
		var assignmentid = raw_data.assignmentid;
		var hitid = raw_data.hitid;
		var turksub = raw_data.turksubmit;
		jsPsych.data.addProperties({
            stim: train_stimuli
        });
        console.log(train_stimuli.stimulus);
        console.log(train_stimuli[0].stimulus);
        jsPsych.data.displayData();
        // jsPsych.data.get().localSave('csv', save_filename.concat('.csv'));
		// saveData(save_filename, jsPsych.data.get().csv(), subject_id, workerid, assignmentid, hitid, turksub);
	}
}

var train = {
	type: "categorize-html",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: [187, 189],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Correct response! </p>",
	incorrect_text: "<p class='prompt'> Incorrect response! </p>",
	stimulus_duration: 1750,
	//stimulus_duration: 2000,
	trial_duration: 1750,
	//trial_duration: 2000,
	feedback_duration: 1000,
    show_stim_with_feedback: false,
    prompt: "<p> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>"
}

var test = {
	type: "categorize-html",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: [187, 189],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
	incorrect_text: "<p class='prompt'> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>",
	stimulus_duration: 1750,
	//stimulus_duration: 2000,
	trial_duration: 1750,
	//trial_duration: 2000,
	feedback_duration: 0,
    prompt: "<p> Are the two circles on the same letter? Respond (-)yes or (+)no: </p>"
}

var train_procedure = {
	timeline: [train],
	timeline_variables: train_stimuli,
	randomize_order: false,
	on_start: function() {
		console.log(train_stimuli);
	}
}
timeline.push(train_procedure);
/*timeline.push(rest1);

var test_procedure1 = {
	timeline: [test],
	timeline_variables: split1_stimuli,
	randomize_order: true,
}
timeline.push(test_procedure1);
timeline.push(rest2);

var test_procedure2 = {
	timeline: [test],
	timeline_variables: split2_stimuli,
	randomize_order: true,
}
timeline.push(test_procedure2);
timeline.push(rest3);

var test_procedure3 = {
	timeline: [test],
	timeline_variables: split3_stimuli,
	randomize_order: true,
}
timeline.push(test_procedure3);
timeline.push(rest4);

var test_procedure4 = {
	timeline: [test],
	timeline_variables: split4_stimuli,
	randomize_order: true,
}
timeline.push(test_procedure4);
timeline.push(rest5);
*/
timeline.push(thanks);
/*
var pastecode = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:20px;"> <p> <strong> Your unique code: </strong> ' + subject_id +
			'</p> Paste this on the Mechanical Turk page and press Submit to complete the experiment. ' +
			'Once you are done submitting, you can safely close this tab. </p> </div>',
	choices: [13],
	data: { part: 'code' }
}

timeline.push(pastecode);
*/
function saveData(name, data, subid, workid, assignid, hitid, turksub) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', './write_data.php'); // 'write_data.php' is the path to the php file described above.
	xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response.success);
            //alert(response.success);
        }
        else {
			console.log("There is some error in accessing files");
			//alert("There is some error in accessing files");
        }
    };
	xhr.send(JSON.stringify({filename: name, filedata: data, SubjectID: subid, 
		workerId: workid, assignId: assignid, hitId: hitid, turksub: turksub}));
}

/* start the experiment */
jsPsych.init({
	timeline: timeline,
});
