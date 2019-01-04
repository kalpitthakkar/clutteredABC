/* create timeline */
var timeline = [];

/* define welcome message trial */
var welcome = {
	type: "html-keyboard-response",
	stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

var instructions = {
	type: "html-keyboard-response",
	stimulus: "<p>In this experiment, you will be shown a series of alphabet images " +
	"at the centre of the screen. Each image contains two randomly chosen alphabets. There " +
    "are two circles drawn in the image, on the alphabets. They can lie either on the same " +
    "alphabet or on two separate alphabets.</p> <p>If the circles lie on <strong>same</strong> " +
    "alphabet, press the letter <strong>y</strong> on the keyboard, otherwise press <strong>n</strong>. " + 
    "Try to keep the response times as minimal as possible.</p>" +
    "<p>The entire experiment in divided into two stages: train and test. Training has one set, consisting of " +
    "<strong>nine</strong> images. In this stage, you will be provided with feedback as to whether your response " +
    "was correct or incorrect. For the test stage, you will be presented with five sets, each consisting of " +
    "<strong>thirty</strong> images. You will be given a rest period between each set." +
	"<p>Press any key to begin.</p>",
	post_trial_gap: 2000
};
timeline.push(instructions);

/* train trials */
var train_stimuli = [
	{ stimulus: 'img/train/ix1_imgs_24_sample_1.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 89},
	{ stimulus: 'img/train/ix2_imgs_32_sample_3.png', data: { part: 'train', correct_response: 'no'}, correct_key: 78},
	{ stimulus: 'img/train/baseline_imgs_2_sample_352.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 89},
	{ stimulus: 'img/train/baseline_imgs_2_sample_131.png', data: { part: 'train', correct_response: 'no'}, correct_key: 78},
	{ stimulus: 'img/train/ix2_imgs_17_sample_259.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 89},
	{ stimulus: 'img/train/ix1_imgs_7_sample_30.png', data: { part: 'train', correct_response: 'no'}, correct_key: 78},
	{ stimulus: 'img/train/baseline_imgs_49_sample_6.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 89},
	{ stimulus: 'img/train/ix1_imgs_48_sample_2.png', data: { part: 'train', correct_response: 'no'}, correct_key: 78},
	{ stimulus: 'img/train/ix2_imgs_40_sample_121.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 89}
];

/* test trials: split[1-5] */
var split1_stimuli = [
	{ stimulus: 'img/split1/ix1_imgs_45_sample_1321.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix1_imgs_19_sample_2307.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_38_sample_2887.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix1_imgs_18_sample_2976.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix1_imgs_50_sample_3845.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix2_imgs_25_sample_1603.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix1_imgs_2_sample_3669.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/baseline_imgs_30_sample_2530.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_7_sample_3524.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_48_sample_628.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix2_imgs_11_sample_3262.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/baseline_imgs_37_sample_1914.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/baseline_imgs_23_sample_915.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix1_imgs_1_sample_1070.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_47_sample_135.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix2_imgs_1_sample_134.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_24_sample_2246.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/baseline_imgs_11_sample_3842.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix1_imgs_3_sample_1114.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/baseline_imgs_44_sample_1222.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix2_imgs_32_sample_1697.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix2_imgs_42_sample_992.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix2_imgs_35_sample_701.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_43_sample_2925.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix2_imgs_25_sample_1843.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/baseline_imgs_46_sample_2333.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split1/ix2_imgs_28_sample_3426.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix2_imgs_13_sample_1702.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix1_imgs_33_sample_2056.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split1/ix2_imgs_26_sample_2721.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 89 }
];

var split2_stimuli = [
	{ stimulus: 'img/split2/ix2_imgs_36_sample_3024.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix1_imgs_19_sample_1476.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_11_sample_1423.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_38_sample_2466.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/baseline_imgs_35_sample_2950.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_12_sample_3337.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix1_imgs_31_sample_2564.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix1_imgs_16_sample_785.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_22_sample_3363.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_49_sample_602.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_23_sample_1644.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_49_sample_62.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix1_imgs_41_sample_2699.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_48_sample_2513.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_46_sample_1552.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_9_sample_3038.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/baseline_imgs_49_sample_1154.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_3_sample_1900.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix1_imgs_33_sample_2044.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix1_imgs_10_sample_3939.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix2_imgs_4_sample_773.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/baseline_imgs_13_sample_142.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_22_sample_1539.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/baseline_imgs_39_sample_152.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/baseline_imgs_39_sample_422.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_3_sample_391.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix2_imgs_14_sample_1861.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split2/ix1_imgs_45_sample_2654.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/baseline_imgs_41_sample_2302.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split2/ix1_imgs_35_sample_491.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 78 }
];

var split3_stimuli = [
	{ stimulus: 'img/split3/ix1_imgs_15_sample_2792.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix2_imgs_24_sample_1474.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/baseline_imgs_50_sample_244.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix2_imgs_3_sample_554.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/baseline_imgs_32_sample_3201.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix2_imgs_1_sample_3192.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix2_imgs_17_sample_3201.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix1_imgs_19_sample_1728.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix1_imgs_46_sample_3979.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix1_imgs_20_sample_3467.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix1_imgs_8_sample_1436.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix2_imgs_28_sample_1357.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/baseline_imgs_10_sample_3329.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/baseline_imgs_31_sample_563.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/baseline_imgs_17_sample_2007.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/baseline_imgs_9_sample_1749.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix1_imgs_29_sample_1767.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/baseline_imgs_1_sample_2172.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix2_imgs_4_sample_2002.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix2_imgs_6_sample_2584.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix2_imgs_14_sample_3015.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix2_imgs_9_sample_594.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix2_imgs_25_sample_2556.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/baseline_imgs_27_sample_396.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/baseline_imgs_38_sample_2546.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/baseline_imgs_41_sample_3178.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix1_imgs_8_sample_1503.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix1_imgs_2_sample_3546.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split3/ix1_imgs_42_sample_1420.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split3/ix1_imgs_49_sample_2912.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 89 }
];

var split4_stimuli = [
	{ stimulus: 'img/split4/baseline_imgs_38_sample_715.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix2_imgs_7_sample_639.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_27_sample_3110.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_32_sample_1509.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_33_sample_884.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/baseline_imgs_6_sample_3387.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix1_imgs_4_sample_3598.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_40_sample_59.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_23_sample_3362.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix1_imgs_12_sample_1577.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix1_imgs_9_sample_2101.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_38_sample_1440.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix1_imgs_38_sample_1042.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix1_imgs_40_sample_1422.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_18_sample_1010.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/baseline_imgs_46_sample_1321.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_29_sample_2934.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_27_sample_2156.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_47_sample_64.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_43_sample_957.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix2_imgs_33_sample_109.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_35_sample_3266.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/baseline_imgs_19_sample_2602.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/ix2_imgs_23_sample_1432.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_31_sample_1516.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_47_sample_2003.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix1_imgs_15_sample_936.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/ix2_imgs_35_sample_1972.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split4/baseline_imgs_15_sample_3537.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split4/baseline_imgs_20_sample_451.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 89 }
];

var split5_stimuli = [
	{ stimulus: 'img/split5/ix1_imgs_42_sample_2419.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix2_imgs_41_sample_58.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix2_imgs_44_sample_804.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix1_imgs_47_sample_2853.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/baseline_imgs_42_sample_312.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix2_imgs_1_sample_3767.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix1_imgs_40_sample_3217.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix2_imgs_34_sample_3491.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix2_imgs_35_sample_2978.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/baseline_imgs_3_sample_3631.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix2_imgs_22_sample_3407.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/baseline_imgs_45_sample_2415.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/baseline_imgs_15_sample_297.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix2_imgs_30_sample_3067.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/baseline_imgs_45_sample_3.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix2_imgs_42_sample_1157.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/baseline_imgs_45_sample_1365.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix2_imgs_4_sample_2736.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix1_imgs_23_sample_480.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix1_imgs_42_sample_1769.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix1_imgs_3_sample_2447.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix1_imgs_21_sample_1860.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix1_imgs_25_sample_3921.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/baseline_imgs_8_sample_2646.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/ix1_imgs_33_sample_1322.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix1_imgs_27_sample_2900.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/baseline_imgs_31_sample_1728.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/baseline_imgs_15_sample_1400.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 78 },
	{ stimulus: 'img/split5/ix2_imgs_23_sample_1757.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 },
	{ stimulus: 'img/split5/baseline_imgs_28_sample_632.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 89 }
];

var fixation = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:60px;">+</div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 1000,
	data: { part: 'fixation' }
}

var rest = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:60px;"> REST. Press any key to begin next stage </div>',
	data: { part: 'rest' }
}

var thanks = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:60px;"> The trials are now complete. Thank you very much for you time. ' +
			'We greatly appreciate it. </div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 10000,
	data: { part: 'thanks' }
}

var train = {
	type: "categorize-image",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: ['y', 'n'],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Correct response! </p>",
	incorrect_text: "<p class='prompt'> Incorrect response! </p>",
	prompt: "<p> Are the two circles on the same letter? Respond (y)es or (n)o: </p>"
}

var test = {
	type: "categorize-image",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: ['y', 'n'],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Are the two circles on the same letter? Respond (y)es or (n)o: </p>",
	incorrect_text: "<p class='prompt'> Are the two circles on the same letter? Respond (y)es or (n)o: </p>",
	prompt: "<p> Are the two circles on the same letter? Respond (y)es or (n)o: </p>"
}

var train_procedure = {
	timeline: [fixation, train],
	timeline_variables: train_stimuli,
	randomize_order: false,
}
timeline.push(train_procedure);
timeline.push(rest);

var test_split1_procedure = {
	timeline: [fixation, test],
	timeline_variables: split1_stimuli,
	randomize_order: true,
}
//timeline.push(test_split1_procedure);
//timeline.push(rest);

var test_split2_procedure = {
	timeline: [fixation, test],
	timeline_variables: split2_stimuli,
	randomize_order: true,
}
//timeline.push(test_split2_procedure);
//timeline.push(rest);

var test_split3_procedure = {
	timeline: [fixation, test],
	timeline_variables: split3_stimuli,
	randomize_order: true,
}
//timeline.push(test_split3_procedure);
//timeline.push(rest);

var test_split4_procedure = {
	timeline: [fixation, test],
	timeline_variables: split4_stimuli,
	randomize_order: true,
}
//timeline.push(test_split4_procedure);
//timeline.push(rest);

var test_split5_procedure = {
	timeline: [fixation, test],
	timeline_variables: split5_stimuli,
	randomize_order: true,
}
//timeline.push(test_split5_procedure);
timeline.push(thanks);

var subject_id = jsPsych.randomization.randomID(15);
var basename = "experiment_data-"
var save_filename = basename.concat(subject_id);
jsPsych.data.addProperties({
	SubjectID: save_filename
})

function saveData(name, data, subid) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', './write_data.php'); // 'write_data.php' is the path to the php file described above.
	xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response.success);
            alert(response.success);
        }
        else {
            alert("There is some error in accessing files");
        }
    };
	xhr.send(JSON.stringify({filename: name, filedata: data, SubjectID: subid}));
}

/* start the experiment */
jsPsych.init({
	timeline: timeline,
	on_finish: function() {
		// call the saveData function after the experiment is over
        // jsPsych.data.displayData();
        // jsPsych.data.get().localSave('csv', save_filename.concat('.csv'));
		saveData(save_filename, jsPsych.data.get().csv(), subject_id);
	}
});
