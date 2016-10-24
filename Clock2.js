window.onload = function ()
{	
	var paper = new Raphael(0, 0, 800, 800);
	var backGround = paper.rect(0, 0, 800, 600);
	backGround.attr({fill: "orange"});
	
	//{ #StartOf Front View - wrist dectoration
	var sideBand1 = paper.path("M 133 165 l -2 -1 l -2 0 l -2 1 l -3 4 l -39 70 l 51 0 l 0 -74");
	sideBand1.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var sideBand2 = sideBand1.clone();
	sideBand2.transform("S -1, 1");
	sideBand2.translate(-177, 0);
	
	var sideBand3 = sideBand1.clone();
	sideBand3.rotate(180, 200, 300);
	
	var sideBand4 = sideBand2.clone();
	sideBand4.rotate(180, 198, 300);
	
	var wristBand1 = paper.rect(163, 156, 72, 35);
	var wristBand2 = paper.rect(163, 126, 72, 30);
	var wristBand3 = paper.rect(163, 111, 72, 15);
	
	var leftSmallBand1 = paper.rect(133, 174, 30, 35);
	var rightSmallBand1 = paper.rect(235, 174, 30, 35);
	var leftSmallBand2 = paper.rect(133, 142, 30, 32);
	var rightSmallBand2 = paper.rect(235, 142, 30, 32);
	var leftSmallBand3 = paper.rect(133, 112, 30, 30);
	var rightSmallBand3 = paper.rect(235, 112, 30, 30);
	
	var topBandSet = paper.set(wristBand1, wristBand2, wristBand3, leftSmallBand1, leftSmallBand2, leftSmallBand3,
		rightSmallBand1, rightSmallBand2, rightSmallBand3);
	topBandSet.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var botBandSet = topBandSet.clone();
	botBandSet.rotate(180, 200, 300);
	
	//} 
	// #EndOf Front View - wrist dectoration
	
	//{ #StartOf Front View - buttons
	/* Side Buttons */
	var setStartStopButton = paper.path("M 295 245 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	setStartStopButton.rotate(65);
	setStartStopButton.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var setSplitButton = paper.path("M 295 340 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	setSplitButton.rotate(115);
	setSplitButton.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var modeButton = paper.path("M 55 340 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	modeButton.rotate(65);
	modeButton.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var resetOnOffButton = paper.path("M 55 245 l 0 15 l 1 2 l 2 2 l 2 1 l 40 0 l 2 -1 l 2 -2 l 1 -2 l 0 -15 l -1 -2 l -2 -2 l -2 -1 l -40 0 l -2 1 l -2 2 l -1 2");
	resetOnOffButton.rotate(115);
	resetOnOffButton.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	/* Winder Button */
	var winderStick = paper.rect(328, 292.5, 15, 15)
	winderStick.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var winderButTop = paper.path("M 336 300 l 0 -18 l 10 0 l 1 2 l 1 3 l 1 5 l 0 8 l -13.5 0");
	winderButTop.attr({fill: "#262626", stroke: "#1a1a1a"});
	var winderButTopArrow = paper.path("M 338.5 293 l 4 -4 l 4 4");
	winderButTopArrow.attr({stroke: "white"});
	
	var winderButBot = paper.path("M 335.5 300 l 13.5 0 l 0 8 l -1 5 l -1 3 l -1 2 l -10 0 l 0 -18");
	winderButBot.attr({fill: "#262626", stroke: "#1a1a1a"});
	var winderButBotArrow = paper.path("M 338.5 308 l 4 4 l 4 -4");
	winderButBotArrow.attr({stroke: "white"});
	
	var winderButTopSet = paper.set(winderButTop, winderButTopArrow);
	var winderButBotSet = paper.set(winderButBot, winderButBotArrow);
	
	//}
	// #EndOf Front View - buttons
	
	//{ #StartOf Front View - face border
	var faceBorder = paper.circle(200, 300, 130);
	
	var faceZero = paper.path("M 200 182 l 6 -8 l -12 0 l 6 8");
	
	var faceTen = paper.text(200, 179, "10");
	faceTen.rotate(60, 200, 300);
	
	var faceTwenty = paper.text(200, 179, "20");
	faceTwenty.rotate(120, 200, 300);
	
	var faceThirty = paper.text(200, 179, "30");
	faceThirty.rotate(180, 200, 300);
	
	var faceForty = paper.text(200, 179, "40");
	faceForty.rotate(240, 200, 300);
	
	var faceFifty = paper.text(200, 179, "50");
	faceFifty.rotate(300, 200, 300);
	
	var backFaceSet = paper.set(faceBorder, faceZero, faceTen, faceTwenty, faceThirty, faceForty, faceFifty);
	backFaceSet.attr({'font-size': 12, fill: "white"});
	faceZero.attr({'font-size': 12, fill: "white", stroke: "#1a1a1a"});
	faceBorder.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	var faceLine = paper.text(200, 177, "|");
	faceLine.attr({'font-size': 10, fill: "white", 'font-weight': 'bolder'})
	faceLine.rotate(30, 200, 300);
	backFaceSet.push(faceLine);
	
	for (var i = 1; i < 6; i++)
	{
		temp = faceLine.clone();
		temp.rotate((i*60), 200, 300);
		backFaceSet.push(temp);
	}
	
	var faceDot = paper.circle(200, 188, 0.5);
	faceDot.attr({fill: "white", stroke: "white"})
	faceDot.rotate(0, 200, 300);
	
	for (var i = 0; i < 60; i++)
	{
		temp = faceDot.clone();
		temp.rotate((i*6), 200, 300);
	}
	//}
	// #EndOf Front View - face border
	
	//{ #StartOf Front View - watch face
	var face = paper.circle(200, 300, 109);
	face.attr({fill: "#333333", stroke: "#1a1a1a"});
	
	var modeFace = paper.path("M 162.5 237.5 l -25 25 l 0 75.5 l 25 25 l 75.5 0 l 25 -25 l 0 -75.5 l -25 -25 l -75.5 0");
	modeFace.attr({fill: "#262626", stroke: "#1a1a1a"});
	
	/* Mode Lights */
	var alarmOn = paper.rect(150, 290, 4, 4);
	alarmOn.attr({fill: "#cccccc", stroke: "#1a1a1a"});
	alarmOn.hide(); // Alarm is off by default
	
	/* Digits - Time and Mode display */
	var digit0 = paper.path("M 155 325 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var digit1 = paper.path("M 147 327 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit2 = paper.path("M 157 327 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit3 = paper.path("M 155 335 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var digit4 = paper.path("M 147 337 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit5 = paper.path("M 157 337 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var digit6 = paper.path("M 155 345 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	hourTenthSet = paper.set(digit0, digit1, digit2, digit3, digit4, digit5, digit6)
	hourTenthSet.attr({fill:"#cccccc", stroke: "#cccccc"});
	
	var hourUnitSet = hourTenthSet.clone();
	hourUnitSet.translate(15, 0);
	
	var minuteTenthSet = hourUnitSet.clone();
	minuteTenthSet.translate(25, 0);
	
	var minuteUnitSet = minuteTenthSet.clone();
	minuteUnitSet.translate(15, 0);
	
	var secondTenthSet = minuteUnitSet.clone();
	secondTenthSet.translate(25, 0);
	
	var secondUnitSet = secondTenthSet.clone();
	secondUnitSet.translate(15, 0);
	
	/* Digits - Day and Date display */
	var dateSet1 = minuteTenthSet.clone()
	dateSet1.translate(0, -70);
	
	var dateSet2 = minuteUnitSet.clone()
	dateSet2.translate(0, -70);
	
	var monthSet1 = secondTenthSet.clone();
	monthSet1.translate(0, -70);
	
	var monthSet2 = secondUnitSet.clone();
	monthSet2.translate(0, -70);
	
	var dayTest0 = paper.path("M 160 255 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var dayTest1 = paper.path("M 152 257 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest15 = dayTest1.clone();
	dayTest15.translate(5, 1);
	var dayTest2 = paper.path("M 162 257 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest3 = paper.path("M 160 265 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	var dayTest4 = paper.path("M 152 267 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest45 = dayTest4.clone();
	dayTest45.translate(5, -1);
	var dayTest5 = paper.path("M 162 267 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	var dayTest6 = paper.path("M 160 275 l 1 1 l -1 1 l -6 0 l -1 -1 l 1 -1 l 6 0");
	
	var dayTest7 = paper.path("M 161.5 277.75 l 1 1 l 0 6 l -1 1 l -1 -1 l 0 -6 l 1 -1");
	dayTest7.rotate(-45);
	
	var daySet1 = paper.set(dayTest0, dayTest1, dayTest15, dayTest2, dayTest3, dayTest4, dayTest5, dayTest6);
	daySet2 = daySet1.clone();
	daySet1.push(dayTest45);
	daySet2.push(dayTest7);
	daySet1.attr({fill:"#cccccc", stroke: "#cccccc"});
	daySet2.attr({fill:"#cccccc", stroke: "#cccccc"});
	daySet2.translate(15, 0);
	
	/* Decroative Features */
	var timerDot1 = paper.rect(178.5, 330.5, 2, 2);
	timerDot1.attr({fill:"#cccccc", stroke: "#cccccc"});
	var timerDot2 = timerDot1.clone();
	timerDot2.translate(0, 10);
	var timerDot3 = timerDot1.clone();
	timerDot3.translate(40, 0);
	var timerDot4 = timerDot2.clone();
	timerDot4.translate(40, 0);
	var timerDot5 = timerDot4.clone();
	timerDot5.translate(0, -65.5);
	
	var faceLine0 = paper.path("M 200 204 l 3 -3 l 0 -6 l -6 0 l 0 6 l 3 3");
	faceLine0.attr({fill: "white", stroke: "#b3b3b3"})
	
	for (var i = 1; i < 4; i++)
	{
		temp = faceLine0.clone();
		temp.rotate((i*90), 200, 300);
	}
	
	var faceLine1 = paper.rect(199.75, 196, 0.5, 6);
	faceLine1.attr({fill: "#b3b3b3", stroke: "#b3b3b3"})
	faceLine1.rotate(6, 200, 300);
	
	for (var i = 0; i < 59; i++)
	{
		if (i != 14 && i != 29 && i != 44)
		{
			temp = faceLine1.clone();
			temp.rotate((i*6), 200, 300);
		}
	}
	
	var faceLine2 = paper.path("M 200 215 l 3 -3 l 0 -16 l -6 0 l 0 16 l 3 3");
	faceLine2.rotate(30, 200, 300);
	faceLine2.attr({fill: "white", stroke: "#b3b3b3"})
	
	for (var i = 1; i < 11; i++)
	{
		if (i != 2 && i != 5 && i != 8)
		{
			temp = faceLine2.clone();
			temp.rotate((i*30), 200, 300);
		}
	}
	
	var face12 = paper.text(199, 215, "12");
	face12.attr({'font-size': 20, fill: "white"});
	
	var face3 = paper.text(288, 300.5, "3");
	face3.attr({'font-size': 20, fill: "white"});
	
	var face6 = paper.text(200, 385.5, "6");
	face6.attr({'font-size': 20, fill: "white"});
	
	var face9 = paper.text(112, 300.5, "9");
	face9.attr({'font-size': 20, fill: "white"});
	
	var madeArr = ["M ", "A", "D", "E", " ", "I", "N", " ", " ", " ", "R", "A", "P", "H", "A", "E", "L"];
	var tempRot = 20;
	
	for (var i = 0; i < madeArr.length; i++)
	{
		temp = paper.text(200, 391, madeArr[i]);
		temp.attr({'font-size': 4, fill: "white"});
		temp.rotate(tempRot, 200, 300);
		tempRot -= 2.5;
	}
	
	/* Button Text */
	var tNESet = paper.text(278, 267, "SET +");
	tNESet.rotate(-15);
	var tStart = paper.text(280, 276, "START");
	tStart.rotate(-15);
	var tStop = paper.text(284, 285, "STOP");
	tStop.rotate(-15);
	
	var tSESet = paper.text(283, 318, "SET -");
	tSESet.rotate(15);
	var tSplit = paper.text(280, 327, "SPLIT");
	tSplit.rotate(15);
	
	var tMode = paper.text(120, 323, "MODE");
	tMode.rotate(-15);
	
	var tReset = paper.text(123, 274, "RESET");
	tReset.rotate(15);
	var tOnOff = paper.text(121, 283, "ON - OFF");
	tOnOff.rotate(15);
	
	var tFaceSet = paper.set(tNESet, tStart, tStop, tSESet, tSplit, tMode, tReset, tOnOff);
	tFaceSet.attr({'font-size': 7, fill: "#b3b3b3"});
	
	/* Mode Text */
	var tCurrentMode = paper.text(200, 355, "DIGITAL MODE");
	tCurrentMode.attr({'font-size': 7, fill: "#b3b3b3"});
	
	/* Hands on watch */
	var hour = paper.path("M 200 300 l 5 0 l -3 -50 l -2 -2 l -2 2 l -3 50");
	var hoursButt = paper.path("M 200 300 l -5 0 l 2 15 l 6 0 l 2 -15");
	hour.attr({fill: "white", stroke: "#b3b3b3"});
	hoursButt.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	var hours = paper.set(hour, hoursButt);
	
	var minute = paper.path("M 200 300 l 4 0 l -2 -88 l -2 -2 l -2 2 l -2 88 ");
	var minutesButt = paper.path("M 200 300 l -4 0 l 1 20 l 6 0 l 1 -20");
	minute.attr({fill: "white", stroke: "#b3b3b3"});
	minutesButt.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	var minutes = paper.set(minute, minutesButt);
	
	var second = paper.path("M 200 300 l 2 0 l -2 -95 l -2 95 ");
	var secondsButt = paper.path("M 200 300 l -2 0 l 1 25 l 2 0 l 1 -25");
	second.attr({fill: "white", stroke: "#b3b3b3"});
	secondsButt.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	var seconds = paper.set(second, secondsButt);
	
	var centerPoint = paper.circle(200, 300, 5);
	centerPoint.attr({fill: "#1a1a1a", stroke: "#0d0d0d"});
	//}
	// #EndOf Front View - watch face
	
	/*  */
	var secondsTick = 0;
	var minutesTick = 0;
	var hoursTick = 0;
	
	var digitalMode = true;
	
	var chronoMode = false;
	var chronoBool = false;
	var chronoH = 0;
	var chronoM = 0;
	var chronoS = 0;
	
	var alarmMode = false;
	var alarmBool = false;
	var alarmH = 0;
	var alarmM = 0;
	var alarmS = 0;
	
	var timerMode = false;
	var timerBool = false;
	var timerH = 0;
	var timerM = 0;
	var timerS = 0;
	
	modeButton.click(function ()
	{
		if (digitalMode == true)
		{
			digitalMode = false;
			chronoMode = true; // Stop watch
			tCurrentMode.attr({text: "CHRONO MODE"});
		}
		else if (chronoMode == true)
		{
			chronoMode = false; // Stop watch
			alarmMode = true;
			tCurrentMode.attr({text: "ALARM MODE"});
		}
		else if (alarmMode == true)
		{
			alarmMode = false;
			timerMode = true;
			tCurrentMode.attr({text: "TIMER MODE"});
		}
		else if (timerMode == true)
		{
			timerMode = false;
			digitalMode = true;
			tCurrentMode.attr({text: "DIGITAL MODE"});
		}
	});
	
	function startTime() 
	{
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var date = today.getDate();
		var month = today.getMonth() + 1; // getMonth starts at 0
		var day = today.getDay();
		
		secondsTick = (s * 6);
		minutesTick = (m * 6);
		hoursTick = 0.5 * (60 * h + m);
		
		seconds.animate({transform: ['r', secondsTick, 200, 300]});
		minutes.animate({transform: ['r', minutesTick, 200, 300]});
		hours.animate({transform: ['r', hoursTick, 200, 300]});
		
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		
		month = checkTime(month);
		date = checkTime(date);
		
		/* Current mode */
		if (chronoMode == true)
		{
			if (chronoBool == true)
			{
				chronoS = mod(chronoS, 60);
				chronoM = mod(chronoM, 60);
				
				chronoS++;
				
				if (chronoS > 59)
				{
					chronoS = 0;
					chronoM++;
					
					if (chronoM > 59)
					{
						chronoM = 0;
						chronoH++;
					}
				}
			}
			
			s = checkTime(chronoS);
			m = checkTime(chronoM);
			h = checkTime(chronoH);
			
			displayDigits(s, 1, secondUnitSet);
			displayDigits(s, 0, secondTenthSet);
			displayDigits(m, 1, minuteUnitSet);
			displayDigits(m, 0, minuteTenthSet);
			displayDigits(h, 1, hourUnitSet);
			displayDigits(h, 0, hourTenthSet);
		}
		else if (alarmMode == true)
		{
			
		}
		else if (timerMode)
		{
			
		}
		else
		{
			displayDigits(s, 1, secondUnitSet);
			displayDigits(s, 0, secondTenthSet);
			displayDigits(m, 1, minuteUnitSet);
			displayDigits(m, 0, minuteTenthSet);
			displayDigits(h, 1, hourUnitSet);
			displayDigits(h, 0, hourTenthSet);
		}
		
		/* Display Day and Month */
		dayCheck(day, daySet1, daySet2);
		displayDigits(date, 0, dateSet1);
		displayDigits(date, 1, dateSet2);
		displayDigits(month, 0, monthSet1);
		displayDigits(month, 1, monthSet2);
		
		// 1 Second delay and call self
		setTimeout(function(){startTime()}, 1000);
	}
	
	function displayDigits(digit, i, set)
	{
		switch(digit.toString().charAt(i))
		{
			case "0":
				set[0].show();
				set[1].show();
				set[2].show();
				set[3].hide();
				set[4].show();
				set[5].show();
				set[6].show();
				break;
			case "1":
				set[0].hide();
				set[1].hide();
				set[2].show();
				set[3].hide();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			case "2":
				set[0].show();
				set[1].hide();
				set[2].show();
				set[3].show();
				set[4].show();
				set[5].hide();
				set[6].show();
				break;
			case "3":
				set[0].show();
				set[1].hide();
				set[2].show();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].show();
				break;
			case "4":
				set[0].hide();
				set[1].show();
				set[2].show();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			case "5":
				set[0].show();
				set[1].show();
				set[2].hide();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].show();
				break;
			case "6":
				set[0].show();
				set[1].show();
				set[2].hide();
				set[3].show();
				set[4].show();
				set[5].show();
				set[6].show();
				break;
			case "7":
				set[0].show();
				set[1].hide();
				set[2].show();
				set[3].hide();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			case "9":
				set[0].show();
				set[1].show();
				set[2].show();
				set[3].show();
				set[4].hide();
				set[5].show();
				set[6].hide();
				break;
			default:
				set[0].show();
				set[1].show();
				set[2].show();
				set[3].show();
				set[4].show();
				set[5].show();
				set[6].show();
		}
	}
	
	function dayCheck(day, set1, set2)
	{
		switch(day)
		{	
			case 0: // Sunday
				set1[0].show();
				set1[1].show();
				set1[2].hide();
				set1[3].hide();
				set1[4].show();
				set1[5].hide();
				set1[6].show();
				set1[7].show();
				set1[8].hide();
				
				set2[0].hide();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].hide();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].hide();
				break;
			case 1: // Monday
				set1[0].show();
				set1[1].show();
				set1[2].show();
				set1[3].show();
				set1[4].hide();
				set1[5].show();
				set1[6].show();
				set1[7].hide();
				set1[8].hide();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].hide();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].hide();
				break;
			case 2: // Tuesday
				set1[0].show();
				set1[1].hide();
				set1[2].show();
				set1[3].hide();
				set1[4].hide();
				set1[5].hide();
				set1[6].hide();
				set1[7].hide();
				set1[8].show();
				
				set2[0].hide();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].hide();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].hide();
				break;
			case 3: // Wednesday
				set1[0].hide();
				set1[1].show();
				set1[2].hide();
				set1[3].show();
				set1[4].hide();
				set1[5].show();
				set1[6].show();
				set1[7].show();
				set1[8].show();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].hide();
				set2[4].show();
				set2[5].show();
				set2[6].hide();
				set2[7].show();
				set2[8].hide();
				break;
			case 4: // Thursday
				set1[0].show();
				set1[1].hide();
				set1[2].show();
				set1[3].hide();
				set1[4].hide();
				set1[5].hide();
				set1[6].hide();
				set1[7].hide();
				set1[8].show();
				
				set2[0].hide();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].show();
				set2[7].hide();
				set2[8].hide();
				break;
			case 5: // Friday
				set1[0].show();
				set1[1].show();
				set1[2].hide();
				set1[3].hide();
				set1[4].show();
				set1[5].show();
				set1[6].hide();
				set1[7].hide();
				set1[8].hide();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].hide();
				set2[7].hide();
				set2[8].show();
				break;
			case 6: // Saturday
				set1[0].show();
				set1[1].show();
				set1[2].hide();
				set1[3].hide();
				set1[4].show();
				set1[5].hide();
				set1[6].show();
				set1[7].show();
				set1[8].hide();
				
				set2[0].show();
				set2[1].show();
				set2[2].hide();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].show();
				set2[7].hide();
				set2[8].hide();
				break;
			default:
				set1[0].show();
				set1[1].show();
				set1[2].show();
				set1[3].show();
				set1[4].show();
				set1[5].show();
				set1[6].show();
				set1[7].show();
				set1[8].show();
				
				set2[0].show();
				set2[1].show();
				set2[2].show();
				set2[3].show();
				set2[4].show();
				set2[5].show();
				set2[6].show();
				set2[7].show();
				set2[8].show();
		}
	}
	
	// http://javascript.about.com/od/problemsolving/a/modulobug.htm
	// http://stackoverflow.com/questions/4467539/javascript-modulo-not-behaving
	// Modulo function which effect negative numbers
	function mod(l, p)
	{
		return ((l % p) + p)% p;
	}
	
	function checkTime(i) 
	{
		if (i < 10) // add zero in front of numbers < 10
		{
			i = '0' + i
		};
		return i;
	}
	
	startTime();
};



