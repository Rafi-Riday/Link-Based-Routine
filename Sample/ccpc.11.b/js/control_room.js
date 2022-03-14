function period(name_,pmi_,password_) {
  return "Name : " + name_ + "<br />" + "PMI : " + pmi_ + "<br />" + "Password : " + password_;
}

function link(name_,link_) {
  return "" + name_ + " : " + link_ + " --  ©  riday  --";
}

function title(name_) {
  return name_ + " || © riday"
}

document.getElementById("1_1").innerHTML = period_1.time + "<br />" + period(period_1_1.name, period_1_1.pmi, period_1_1.password);
document.getElementById("1_2").innerHTML = period_2.time + "<br />" + period(period_1_2.name, period_1_2.pmi, period_1_2.password);
document.getElementById("1_3").innerHTML = period_3.time + "<br />" + period(period_1_3.name, period_1_3.pmi, period_1_3.password);
document.getElementById("1_4").innerHTML = period_4.time + "<br />" + period(period_1_4.name, period_1_4.pmi, period_1_4.password);

document.getElementById("2_1").innerHTML = period_1.time + "<br />" + period(period_2_1.name, period_2_1.pmi, period_2_1.password);
document.getElementById("2_2").innerHTML = period_2.time + "<br />" + period(period_2_2.name, period_2_2.pmi, period_2_2.password);
document.getElementById("2_3").innerHTML = period_3.time + "<br />" + period(period_2_3.name, period_2_3.pmi, period_2_3.password);
document.getElementById("2_4").innerHTML = period_4.time + "<br />" + period(period_2_4.name, period_2_4.pmi, period_2_4.password);

document.getElementById("3_1").innerHTML = period_1.time + "<br />" + period(period_3_1.name, period_3_1.pmi, period_3_1.password);
document.getElementById("3_2").innerHTML = period_2.time + "<br />" + period(period_3_2.name, period_3_2.pmi, period_3_2.password);
document.getElementById("3_3").innerHTML = period_3.time + "<br />" + period(period_3_3.name, period_3_3.pmi, period_3_3.password);
document.getElementById("3_4").innerHTML = period_4.time + "<br />" + period(period_3_4.name, period_3_4.pmi, period_3_4.password);

document.getElementById("4_1").innerHTML = period_1.time + "<br />" + period(period_4_1.name, period_4_1.pmi, period_4_1.password);
document.getElementById("4_2").innerHTML = period_2.time + "<br />" + period(period_4_2.name, period_4_2.pmi, period_4_2.password);
document.getElementById("4_3").innerHTML = period_3.time + "<br />" + period(period_4_3.name, period_4_3.pmi, period_4_3.password);
document.getElementById("4_4").innerHTML = period_4.time + "<br />" + period(period_4_4.name, period_4_4.pmi, period_4_4.password);

document.getElementById("5_1").innerHTML = period_1.time + "<br />" + period(period_5_1.name, period_5_1.pmi, period_5_1.password);
document.getElementById("5_2").innerHTML = period_2.time + "<br />" + period(period_5_2.name, period_5_2.pmi, period_5_2.password);
document.getElementById("5_3").innerHTML = period_3.time + "<br />" + period(period_5_3.name, period_5_3.pmi, period_5_3.password);
document.getElementById("5_4").innerHTML = period_4.time + "<br />" + period(period_5_4.name, period_5_4.pmi, period_5_4.password);


let link_share = {
  period_1_1 : link(period_1_1.name, period_1_1.link),
  period_1_2 : link(period_1_2.name, period_1_2.link),
  period_1_3 : link(period_1_3.name, period_1_3.link),
  period_1_4 : link(period_1_4.name, period_1_4.link),

  period_2_1 : link(period_2_1.name, period_2_1.link),
  period_2_2 : link(period_2_2.name, period_2_2.link),
  period_2_3 : link(period_2_3.name, period_2_3.link),
  period_2_4 : link(period_2_4.name, period_2_4.link),

  period_3_1 : link(period_3_1.name, period_3_1.link),
  period_3_2 : link(period_3_2.name, period_3_2.link),
  period_3_3 : link(period_3_3.name, period_3_3.link),
  period_3_4 : link(period_3_4.name, period_3_4.link),

  period_4_1 : link(period_4_1.name, period_4_1.link),
  period_4_2 : link(period_4_2.name, period_4_2.link),
  period_4_3 : link(period_4_3.name, period_4_3.link),
  period_4_4 : link(period_4_4.name, period_4_4.link),

  period_5_1 : link(period_5_1.name, period_5_1.link),
  period_5_2 : link(period_5_2.name, period_5_2.link),
  period_5_3 : link(period_5_3.name, period_5_3.link),
  period_5_4 : link(period_5_4.name, period_5_4.link),
}


document.getElementById("link_1_1").setAttribute("href", period_1_1.link);
document.getElementById("link_1_1").setAttribute("target", "_blank")
document.getElementById("link_1_2").setAttribute("href", period_1_2.link);
document.getElementById("link_1_2").setAttribute("target", "_blank")
document.getElementById("link_1_3").setAttribute("href", period_1_3.link);
document.getElementById("link_1_3").setAttribute("target", "_blank")
document.getElementById("link_1_4").setAttribute("href", period_1_4.link);
document.getElementById("link_1_4").setAttribute("target", "_blank")

document.getElementById("link_2_1").setAttribute("href", period_2_1.link);
document.getElementById("link_2_1").setAttribute("target", "_blank")
document.getElementById("link_2_2").setAttribute("href", period_2_2.link);
document.getElementById("link_2_2").setAttribute("target", "_blank")
document.getElementById("link_2_3").setAttribute("href", period_2_3.link);
document.getElementById("link_2_3").setAttribute("target", "_blank")
document.getElementById("link_2_4").setAttribute("href", period_2_4.link);
document.getElementById("link_2_4").setAttribute("target", "_blank")

document.getElementById("link_3_1").setAttribute("href", period_3_1.link);
document.getElementById("link_3_1").setAttribute("target", "_blank")
document.getElementById("link_3_2").setAttribute("href", period_3_2.link);
document.getElementById("link_3_2").setAttribute("target", "_blank")
document.getElementById("link_3_3").setAttribute("href", period_3_3.link);
document.getElementById("link_3_3").setAttribute("target", "_blank")
document.getElementById("link_3_4").setAttribute("href", period_3_4.link);
document.getElementById("link_3_4").setAttribute("target", "_blank")

document.getElementById("link_4_1").setAttribute("href", period_4_1.link);
document.getElementById("link_4_1").setAttribute("target", "_blank")
document.getElementById("link_4_2").setAttribute("href", period_4_2.link);
document.getElementById("link_4_2").setAttribute("target", "_blank")
document.getElementById("link_4_3").setAttribute("href", period_4_3.link);
document.getElementById("link_4_3").setAttribute("target", "_blank")
document.getElementById("link_4_4").setAttribute("href", period_4_4.link);
document.getElementById("link_4_4").setAttribute("target", "_blank")

document.getElementById("link_5_1").setAttribute("href", period_5_1.link);
document.getElementById("link_5_1").setAttribute("target", "_blank")
document.getElementById("link_5_2").setAttribute("href", period_5_2.link);
document.getElementById("link_5_2").setAttribute("target", "_blank")
document.getElementById("link_5_3").setAttribute("href", period_5_3.link);
document.getElementById("link_5_3").setAttribute("target", "_blank")
document.getElementById("link_5_4").setAttribute("href", period_5_4.link);
document.getElementById("link_5_4").setAttribute("target", "_blank")
