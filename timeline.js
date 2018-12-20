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
	stimulus: "<p>In this experiment, a circle will appear in the center " +
	"of the screen.</p><p>If the circle is <strong>blue</strong>, " +
	"press the letter F on the keyboard as fast as you can.</p>" +
	"<p>If the circle is <strong>orange</strong>, press the letter J " +
	"as fast as you can.</p>" +
	"<div style='width: 700px;'>"+
	"<div style='float: left;'><img src='img/blue.png' style='width: 50px; height: 50px'></img>" +
	"<p class='small'><strong>Press the F key</strong></p></div>" +
	"<div class='float: right;'><img src='img/orange.png' style='width: 50px; height: 50px'></img>" +
	"<p class='small'><strong>Press the J key</strong></p></div>" +
	"</div>"+
	"<p>Press any key to begin.</p>",
	post_trial_gap: 2000
};
timeline.push(instructions);

/* train trials */
var train_stimuli = [
	{ stimulus: 'img/train/ix1_24_1.png', data: { part: 'train', correct_response: 'right'}, correct_key: 'y'},
	{ stimulus: 'img/train/ix2_32_3.png', data: { part: 'train', correct_response: 'left'}, correct_key: 'n'},
	{ stimulus: 'img/train/baseline_2_352.png', data: { part: 'train', correct_response: 'left'}, correct_key: 'n'},
	{ stimulus: 'img/train/baseline_2_131.png', data: { part: 'train', correct_response: 'right'}, correct_key: 'y'},
	{ stimulus: 'img/train/ix1_6_3.png', data: { part: 'train', correct_response: 'left'}, correct_key: 'n'},
	{ stimulus: 'img/train/ix1_46_94.png', data: { part: 'train', correct_response: 'right'}, correct_key: 'y'},
	{ stimulus: 'img/train/ix2_17_259.png', data: { part: 'train', correct_response: 'right'}, correct_key: 'y'},
	{ stimulus: 'img/train/baseline_49_6.png', data: { part: 'train', correct_response: 'left'}, correct_key: 'n'},
	{ stimulus: 'img/train/ix2_40_121.png', data: { part: 'train', correct_response: 'right'}, correct_key: 'y'}
];

/* test trials: split[1-5] */
var split1_stimuli = [
	{ stimulus: 'img/split1/baseline_2_1281.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_19_991.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_30_3218.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_14_2366.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_14_1881.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_3_3549.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_16_1359.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_26_835.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_24_3067.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_20_3240.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_22_1100.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_5_1541.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_6_1437.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_34_1464.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_2_2985.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_23_3693.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_2_2695.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_2_2296.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_5_2452.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_24_45.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_26_1521.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_32_2789.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_32_273.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_4_2811.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_14_3739.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_6_1127.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_35_77.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_28_2570.png', data: { part: 'split1', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split1/baseline_20_937.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split1/baseline_29_1415.png', data: { part: 'split1', correct_response: 'right'}, correct_key: 'y' }
];

var split2_stimuli = [
	{ stimulus: 'img/split2/ix1_5_1257.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_37_3730.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_46_744.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_47_1896.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_35_2565.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_43_2384.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_47_3180.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_4_783.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_45_2933.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_38_3917.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_40_3810.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_3_1874.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_1_2198.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_8_2612.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_10_1042.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_14_1079.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_40_1459.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_13_1447.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_2_1995.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_48_2800.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_44_388.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_12_1776.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_12_1254.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/baseline_39_307.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_36_2401.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/ix1_10_1187.png', data: { part: 'split2', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split2/ix1_3_3715.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/ix1_13_3307.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/baseline_36_808.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split2/ix1_7_1702.png', data: { part: 'split2', correct_response: 'right'}, correct_key: 'y' }
];

var split3_stimuli = [
	{ stimulus: 'img/split3/ix1_18_2527.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_27_3468.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_25_3664.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_31_1661.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_21_2687.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_39_1736.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_30_1723.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_30_1761.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_15_2237.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_44_2912.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_41_1314.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_19_436.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_31_3718.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_28_2637.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_45_905.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_37_3114.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_23_1012.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_18_197.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_30_1379.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_45_1374.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_28_3094.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_20_2921.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_47_586.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_24_2477.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_15_18.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_36_60.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_19_3805.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_30_1558.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split3/ix1_31_333.png', data: { part: 'split3', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split3/ix1_15_1690.png', data: { part: 'split3', correct_response: 'left'}, correct_key: 'n' }
];

var split4_stimuli = [
	{ stimulus: 'img/split4/ix2_10_1043.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_13_2403.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix1_50_3475.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_22_672.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_24_3648.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_27_1838.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_7_2636.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_2_3977.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_11_2635.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_3_2911.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_21_1475.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_17_2771.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_16_1163.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_28_1089.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_18_3179.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_26_903.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix1_48_3305.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_4_2102.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_1_3712.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_3_2798.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix1_47_1422.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_1_1875.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_7_1562.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_11_480.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix1_50_284.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_1_2507.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_17_166.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_20_508.png', data: { part: 'split4', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split4/ix2_22_2675.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split4/ix2_26_145.png', data: { part: 'split4', correct_response: 'right'}, correct_key: 'y' }
];

var split5_stimuli = [
	{ stimulus: 'img/split5/ix2_44_3177.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_29_2312.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_42_2352.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_28_3272.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_45_624.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_40_3483.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_44_483.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_41_3906.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_37_1585.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_45_770.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_49_1619.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_39_1483.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_38_2539.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_44_2971.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_47_1594.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_37_1073.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_35_3461.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_37_3274.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_33_1601.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_39_3252.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_36_381.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_47_2621.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_48_3366.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_50_3864.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_49_3428.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_42_3896.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_33_1114.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' },
	{ stimulus: 'img/split5/ix2_46_1414.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_32_2138.png', data: { part: 'split5', correct_response: 'left'}, correct_key: 'n' },
	{ stimulus: 'img/split5/ix2_30_2593.png', data: { part: 'split5', correct_response: 'right'}, correct_key: 'y' }
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
	key_answer: function() {
		return jsPsych.pluginAPI.convertKeyCharacterToKeyCode(jsPsych.timelineVariable('correct_key'));
	},
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
timeline.push(test_split1_procedure);
timeline.push(rest);

var test_split2_procedure = {
	timeline: [fixation, test],
	timeline_variables: split2_stimuli,
	randomize_order: true,
}
timeline.push(test_split2_procedure);
timeline.push(rest);

var test_split3_procedure = {
	timeline: [fixation, test],
	timeline_variables: split3_stimuli,
	randomize_order: true,
}
timeline.push(test_split3_procedure);
timeline.push(rest);

var test_split4_procedure = {
	timeline: [fixation, test],
	timeline_variables: split4_stimuli,
	randomize_order: true,
}
timeline.push(test_split4_procedure);
timeline.push(rest);

var test_split5_procedure = {
	timeline: [fixation, test],
	timeline_variables: split5_stimuli,
	randomize_order: true,
}
timeline.push(test_split5_procedure);
timeline.push(thanks);

/* start the experiment */
jsPsych.init({
	timeline: timeline,
	on_finish: function() {
		jsPsych.data.displayData();
	}
});
