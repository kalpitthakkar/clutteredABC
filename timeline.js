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
	url: 'http://f4be9f9a.ngrok.io/consent.html',
	cont_btn: 'agree'
}
timeline.push(consent);

var instructions = {
	type: "html-keyboard-response",
	stimulus: "<p> You will make decisions about a series of images. Each image has two letters and two circles. " +
    "Your task is to decide whether the two circles are on the <strong>same</strong> or <strong>different</strong> letters.</p>" +
    "<p>If the circles are on the same letter, press <strong>+</strong>. If the circles are on different letters, press <strong>-</strong>.</p>" +
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
	{ stimulus: 'img/train/baseline-_imgs_45_sample_2620.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/train/ix1-_imgs_34_sample_1461.png', data: { part: 'train', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/train/ix1-_imgs_32_sample_3751.png', data: { part: 'train', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/train/ix2_imgs_12_sample_3018.png', data: { part: 'train', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/train/baseline-_imgs_45_sample_667.png', data: { part: 'train', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/train/ix1-_imgs_33_sample_3031.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/train/ix1-_imgs_40_sample_2340.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/train/baseline-_imgs_20_sample_724.png', data: { part: 'train', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/train/ix2_imgs_18_sample_1674.png', data: { part: 'train', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/train/ix2_imgs_8_sample_27.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/train/ix2_imgs_22_sample_1159.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/train/baseline-_imgs_4_sample_3370.png', data: { part: 'train', correct_response: 'yes'}, correct_key: 187 },
];

/* test trials: split[1-5] */
var split1_stimuli = [
	{ stimulus: 'img/split1/baseline-_imgs_46_sample_1802.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/baseline-_imgs_21_sample_1083.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/baseline-_imgs_49_sample_731.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_25_sample_2278.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/baseline-_imgs_15_sample_1796.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/baseline-_imgs_5_sample_1652.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix2_imgs_10_sample_456.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix2_imgs_7_sample_1561.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix2_imgs_17_sample_2998.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix1-_imgs_25_sample_3085.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_48_sample_709.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix2_imgs_14_sample_1930.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix1-_imgs_18_sample_1780.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix2_imgs_26_sample_2170.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_25_sample_1081.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix2_imgs_24_sample_1053.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix2_imgs_25_sample_16.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_28_sample_655.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/baseline-_imgs_32_sample_189.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix1-_imgs_39_sample_1639.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix1-_imgs_38_sample_3002.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix1-_imgs_46_sample_152.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/ix2_imgs_11_sample_783.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_46_sample_3747.png', data: { part: 'split1', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split1/baseline-_imgs_13_sample_1499.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/baseline-_imgs_2_sample_3030.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_33_sample_3443.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix2_imgs_2_sample_3444.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix1-_imgs_3_sample_510.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split1/ix2_imgs_9_sample_1225.png', data: { part: 'split1', correct_response: 'yes'}, correct_key: 187 },
];

var split2_stimuli = [
	{ stimulus: 'img/split2/baseline-_imgs_23_sample_3506.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_17_sample_165.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix1-_imgs_13_sample_2488.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix1-_imgs_12_sample_3804.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_24_sample_3719.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix2_imgs_42_sample_2505.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix2_imgs_18_sample_386.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix1-_imgs_39_sample_2646.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix1-_imgs_40_sample_2538.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/baseline-_imgs_21_sample_1607.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix1-_imgs_50_sample_2473.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/baseline-_imgs_17_sample_2505.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_33_sample_3356.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix2_imgs_6_sample_3752.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/baseline-_imgs_35_sample_3061.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix2_imgs_18_sample_2820.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix2_imgs_43_sample_1623.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix1-_imgs_7_sample_2045.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_39_sample_1029.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/baseline-_imgs_16_sample_1380.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_50_sample_1764.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix2_imgs_9_sample_2326.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix1-_imgs_13_sample_3650.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix2_imgs_44_sample_2397.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/ix2_imgs_1_sample_2052.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_22_sample_3337.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/ix1-_imgs_25_sample_2490.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/baseline-_imgs_44_sample_3682.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split2/baseline-_imgs_17_sample_2169.png', data: { part: 'split2', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split2/baseline-_imgs_9_sample_1355.png', data: { part: 'split2', correct_response: 'yes'}, correct_key: 187 },
];

var split3_stimuli = [
	{ stimulus: 'img/split3/baseline-_imgs_13_sample_2585.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix1-_imgs_47_sample_3435.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/baseline-_imgs_8_sample_3286.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix2_imgs_8_sample_2032.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_36_sample_520.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix2_imgs_14_sample_3024.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/baseline-_imgs_6_sample_3820.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix2_imgs_25_sample_1970.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_14_sample_1011.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix2_imgs_10_sample_3203.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_16_sample_3462.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_16_sample_1781.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix1-_imgs_35_sample_2334.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix2_imgs_44_sample_2783.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_8_sample_401.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix2_imgs_27_sample_1879.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix2_imgs_32_sample_1675.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_50_sample_1152.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix1-_imgs_13_sample_749.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix1-_imgs_9_sample_22.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/baseline-_imgs_19_sample_3429.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix1-_imgs_32_sample_3104.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix1-_imgs_3_sample_2287.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_20_sample_2642.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix2_imgs_48_sample_2840.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix2_imgs_12_sample_2392.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix1-_imgs_20_sample_944.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/ix1-_imgs_38_sample_2092.png', data: { part: 'split3', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split3/baseline-_imgs_19_sample_3773.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split3/ix2_imgs_8_sample_3945.png', data: { part: 'split3', correct_response: 'no'}, correct_key: 189 },
];

var split4_stimuli = [
	{ stimulus: 'img/split4/ix1-_imgs_8_sample_2817.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_46_sample_3849.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix2_imgs_29_sample_1740.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_28_sample_1938.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_41_sample_779.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/baseline-_imgs_38_sample_2098.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_29_sample_1800.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix2_imgs_41_sample_2492.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/baseline-_imgs_34_sample_2244.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/baseline-_imgs_40_sample_3271.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/baseline-_imgs_36_sample_2342.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix2_imgs_28_sample_1221.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_17_sample_780.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/baseline-_imgs_32_sample_3076.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_45_sample_3729.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix2_imgs_28_sample_3172.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_33_sample_1937.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_42_sample_1068.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_43_sample_3173.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/baseline-_imgs_17_sample_3937.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_37_sample_1067.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_16_sample_1161.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix2_imgs_7_sample_1961.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_22_sample_3553.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_14_sample_463.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/baseline-_imgs_42_sample_1857.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix1-_imgs_18_sample_3348.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/baseline-_imgs_36_sample_2133.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split4/ix1-_imgs_12_sample_2283.png', data: { part: 'split4', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split4/ix2_imgs_32_sample_1678.png', data: { part: 'split4', correct_response: 'yes'}, correct_key: 187 },
];

var split5_stimuli = [
	{ stimulus: 'img/split5/ix2_imgs_7_sample_3278.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix1-_imgs_12_sample_2873.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_23_sample_533.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix1-_imgs_6_sample_1089.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/baseline-_imgs_17_sample_1845.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/baseline-_imgs_27_sample_3689.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_19_sample_492.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_24_sample_669.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_32_sample_2704.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix1-_imgs_50_sample_3245.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_37_sample_2919.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/baseline-_imgs_39_sample_364.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_46_sample_3796.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_42_sample_650.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix1-_imgs_40_sample_870.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_8_sample_3826.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/baseline-_imgs_47_sample_2724.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_38_sample_674.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix1-_imgs_18_sample_3907.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/baseline-_imgs_9_sample_1454.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_37_sample_2496.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix1-_imgs_34_sample_1300.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_17_sample_731.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/baseline-_imgs_10_sample_2329.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_41_sample_1523.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_20_sample_3562.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/baseline-_imgs_12_sample_3538.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
	{ stimulus: 'img/split5/ix2_imgs_30_sample_1181.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/ix2_imgs_29_sample_3854.png', data: { part: 'split5', correct_response: 'yes'}, correct_key: 187 },
	{ stimulus: 'img/split5/baseline-_imgs_12_sample_1877.png', data: { part: 'split5', correct_response: 'no'}, correct_key: 189 },
];

var subject_id = jsPsych.randomization.randomID(15);
var basename = "experiment_data-"
var save_filename = basename.concat(subject_id);
jsPsych.data.addProperties({
	SubjectID: save_filename
})

var fixation = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:60px;">+</div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 1000,
	data: { part: 'fixation' }
}

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
	stimulus: '<div style="font-size:30px;"> <p> The entire experiment is now complete. Thank you very much for you time. </p>' +
			'<p> You will now see a page with your unique code. Make sure to copy it and paste it on your mechanical turk page. </p> </div>',
	choices: jsPsych.NO_KEYS,
	trial_duration: 2000,
	data: { part: 'thanks' },
	on_finish: function() {
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
	}
}

var train = {
	type: "categorize-image",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: [187, 189],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Correct response! </p>",
	incorrect_text: "<p class='prompt'> Incorrect response! </p>",
	feedback_duration: 500,
    prompt: "<p> Are the two circles on the same letter? Respond (+)yes or (-)no: </p>"
}

var test = {
	type: "categorize-image",
	stimulus: jsPsych.timelineVariable('stimulus'),
	choices: [187, 189],
	data: jsPsych.timelineVariable('data'),
	key_answer: jsPsych.timelineVariable('correct_key'),
	correct_text: "<p class='prompt'> Are the two circles on the same letter? Respond (+)yes or (-)no: </p>",
	incorrect_text: "<p class='prompt'> Are the two circles on the same letter? Respond (+)yes or (-)no: </p>",
	feedback_duration: 0,
    prompt: "<p> Are the two circles on the same letter? Respond (+)yes or (-)no: </p>"
}

var train_procedure = {
	timeline: [fixation, train],
	timeline_variables: train_stimuli,
	randomize_order: false,
}
timeline.push(train_procedure);
timeline.push(rest1);

var test_split1_procedure = {
	timeline: [fixation, test],
	timeline_variables: split1_stimuli,
	randomize_order: true,
}
timeline.push(test_split1_procedure);
timeline.push(rest2);

var test_split2_procedure = {
	timeline: [fixation, test],
	timeline_variables: split2_stimuli,
	randomize_order: true,
}
timeline.push(test_split2_procedure);
timeline.push(rest3);

var test_split3_procedure = {
	timeline: [fixation, test],
	timeline_variables: split3_stimuli,
	randomize_order: true,
}
timeline.push(test_split3_procedure);
timeline.push(rest4);

var test_split4_procedure = {
	timeline: [fixation, test],
	timeline_variables: split4_stimuli,
	randomize_order: true,
}
timeline.push(test_split4_procedure);
timeline.push(rest5);

var test_split5_procedure = {
	timeline: [fixation, test],
	timeline_variables: split5_stimuli,
	randomize_order: true,
}
timeline.push(test_split5_procedure);
timeline.push(thanks);

var pastecode = {
	type: 'html-keyboard-response',
	stimulus: '<div style="font-size:20px;"> <p> <strong> Your unique code: </strong> ' + subject_id +
			'</p> Paste this on the Mechanical Turk page and press Submit to complete the experiment. ' +
			'Once you are done submitting, you can safely close this tab. </p> </div>',
	choices: [13],
	data: { part: 'code' }
}

timeline.push(pastecode);

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
