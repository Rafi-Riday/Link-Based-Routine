setInterval(detect, 100);
function detect() {
	if(new Date().getDay() == 0) {
		document.getElementById("weekday_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
		document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
		if (new Date().getHours() <= 8) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Off || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_1_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_1_1.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_1_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_1_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_1_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_1_2.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_1_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_1_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_1_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_1_3.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_1_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_1_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_1_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_1_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_1_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_1_4.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_1_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_1_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
		else if (new Date().getHours() >= 11) {
			document.getElementById("weekday_0").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
	}
	else if(new Date().getDay() == 1) {
		document.getElementById("weekday_0").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
		document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
		if (new Date().getHours() <= 8) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Off || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_2_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_2_1.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_2_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_2_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_2_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_2_2.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_2_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_2_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_2_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_2_3.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_2_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_2_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_2_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_2_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_2_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_2_4.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_2_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_2_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
		else if (new Date().getHours() >= 11) {
			document.getElementById("weekday_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
	}
	else if(new Date().getDay() == 2) {
		document.getElementById("weekday_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
		document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
		if (new Date().getHours() <= 8) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Off || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_3_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_3_1.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_3_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_3_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_3_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_3_2.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_3_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_3_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_3_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_3_3.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_3_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_3_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_3_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_3_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_3_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_3_4.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_3_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_3_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
		else if (new Date().getHours() >= 11) {
			document.getElementById("weekday_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
	}
	else if(new Date().getDay() == 3) {
		document.getElementById("weekday_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
		document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
		if (new Date().getHours() <= 8) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Off || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_4_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_4_1.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_4_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_4_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_4_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_4_2.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_4_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_4_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_4_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_4_3.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_4_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_4_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_4_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_4_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_4_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_4_4.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_4_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_4_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
		else if (new Date().getHours() >= 11) {
			document.getElementById("weekday_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
	}
	else if(new Date().getDay() == 4) {
		document.getElementById("weekday_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
		document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
		if (new Date().getHours() <= 8) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Off || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_1").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_5_1").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_5_1.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_5_1.name;
		}
		else if (new Date().getHours() == 8 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_1").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_5_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_2").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_5_2").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_5_2.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_5_2.name;
		}
		else if (new Date().getHours() == 9 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_2").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_5_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_3").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_5_3").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_5_3.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_5_3.name;
		}
		else if (new Date().getHours() == 10 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_3").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_5_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 0 && new Date().getMinutes() <= 14) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.getElementById("link_5_4").setAttribute("style", "font-weight: 1000; background: #F93154a0;");
			document.title = "Waitting || © riday";
			document.getElementById("detected_period").innerHTML = "<br />Next class : " + period_5_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 15 && new Date().getMinutes() <= 55) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.getElementById("link_5_4").setAttribute("style", "font-weight: 1000; background: #518adf94;");
			document.title = title(period_5_4.name);
			document.getElementById("detected_period").innerHTML = "<br />Running Class : " + period_5_4.name;
		}
		else if (new Date().getHours() == 11 && new Date().getMinutes() >= 56 && new Date().getMinutes() <= 59) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.getElementById("link_5_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
		else if (new Date().getHours() >= 11) {
			document.getElementById("weekday_4").setAttribute("style", "font-weight: 500; background: linear-gradient(180deg, rgba(200, 200, 200, 0.1) 20%, rgba(200, 200, 200, 0.1) 100%);");
			document.title = "All Classes Are Over || © riday";
			document.getElementById("join_text").innerHTML = "All Classes Are Over";
			document.getElementById("detected_period").innerHTML = "";
		}
	}
	else {}
}