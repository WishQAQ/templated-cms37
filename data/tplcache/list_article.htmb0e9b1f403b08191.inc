<?php
$z[0]=Array("field","",64,83);
$z[0][4]['name']="title";
$z[1]=Array("global","",84,110);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",151,180);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",220,278);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",3266,3301);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",4322,4351);
$z[5][4]['name']="position";
$z[6]=Array("channel","\r\n     <a href='[field:typeurl/]'>[field:typename/]</a> \r\n	    ",4644,4820);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<a href='~typelink~' class='on'>~typename~</a>";
$z[7]=Array("arclist","\r\n      <div class=\"news_hot c\">\r\n        <div class=\"news_left fl\"> <a href=\"[field:arcurl/]\"> <img src=\"[field:litpic/]\" width=\"334\" height=\"196\" /> <span class=\"hot\"><img src=\"/templates/web/images/hot.png\" alt=\"hot\" /></span> </a> </div>\r\n        <!--news_left end-->\r\n        <div class=\"news_right fl\">\r\n          <div class=\"date fl\">\r\n            <div class=\"li1\"> [field:pubdate  function=strftime('%d',@me)/]</div>\r\n            <div class=\"li2\">[field:pubdate  function=strftime('%Y-/%m',@me)/]</div>\r\n          </div>\r\n          <!--date end-->\r\n          <div class=\"news-title fr\"><a href=\"[field:arcurl/]\">[field:title/]</a></div>\r\n          <br style=\"clear:both\">\r\n          <div class=\"news-con pt20\">[field:description/]...</div>\r\n          <div class=\"more pt20\"><a href=\"[field:arcurl/]\">查看详细</a></div>\r\n        </div>\r\n        <!--news_right end-->\r\n      </div>\r\n	      ",4894,5846);
$z[7][4]['row']="1";
$z[7][4]['flag']="p";
$z[8]=Array("list","\r\n        <li> <span class=\"li1\"><span> [field:pubdate  function=strftime('%m/%d',@me)/]</span>/ [field:pubdate  function=strftime('%Y',@me)/]</span> <a href=\"[field:arcurl/]\">[field:title/]</a> </li>\r\n        ",5915,6163);
$z[8][4]['pagesize']="6";
$z[9]=Array("pagelist","",7041,7119);
$z[9][4]['listitem']="info,index,end,pre,next,pageno,option";
$z[9][4]['listsize']="5";
$z[10]=Array("include","",7257,7295);
$z[10][4]['filename']="footer2.htm";

?>