<?php
/**
 *
 * ���԰�
 *
 * @version        $Id: guestbook.php 1 10:09 2010-11-10 tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__).'/guestbook/guestbook.inc.php');
require_once(DEDEINC.'/datalistcp.class.php');

require_once(DEDEINC.'/arc.archives.class.php');
if(empty($action)) $action = '';
//�޸�����
 
 $t1 = ExecTime();

if(empty($okview)) $okview = '';
if(isset($arcID)) $aid = $arcID;
if(!isset($dopost)) $dopost = '';

$arcID = $aid = (isset($aid) && is_numeric($aid)) ? $aid : 0;
if($aid==0) die(" Request Error! ");

 

 
 
 
 
//��������
  if($action=='save')
{
    if(!empty($_COOKIE['GUEST_BOOK_POS'])) $GUEST_BOOK_POS = $_COOKIE['GUEST_BOOK_POS'];
    else $GUEST_BOOK_POS = 'guestbook.php';
    if(empty($validate)) $validate=='';
    else $validate = strtolower($validate);
    $svali = GetCkVdValue();
    if($validate=='' || $validate!=$svali)
    {
         ShowMsg("��֤�벻��ȷ!","");
         exit();
    }
    $ip = GetIP();
    $dtime = time();
    $uname = trimMsg($uname);
    $email = trimMsg($email);
    $homepage = trimMsg($homepage);
    $homepage = preg_replace("#http:\/\/#", '', $homepage);
    $qq = trimMsg($qq);
    $msg = trimMsg(cn_substrR($msg, 1024), 1);
    $tid = empty($tid) ? 0 : intval($tid);
    $reid = empty($reid) ? 0 : intval($reid);

    if($msg=='' || $uname=='') {
        showMsg('����������������ݲ���Ϊ��!','-1');
        exit();
    }
    $title = HtmlReplace( cn_substrR($title,60), 1 );
    if($title=='') $title = '�ޱ���';
    
    if($reid != 0)
    {
        $row = $dsql->GetOne("SELECT msg FROM `#@__guestbook` WHERE id='$reid' ");
        $msg = "<div class=\\'rebox\\'>".addslashes($row['msg'])."</div>\n".$msg;
    }

    $query = "INSERT INTO `#@__guestbook`(title,tid,mid,uname,email,homepage,qq,face,msg,ip,dtime,ischeck)
                  VALUES ('$title','$tid','{$g_mid}','$uname','$email','$homepage','$qq','$img','$msg','$ip','$dtime','$needCheck'); ";
    $dsql->ExecuteNoneQuery($query);
    $gid = $dsql->GetLastID();
    if($needCheck==1)
    {
        require_once(DEDEINC."/oxwindow.class.php");
        $msg = "
        <font color='red'><b>�ɹ����ͻ�ظ����ԣ�</b></font> &nbsp; <a href='guestbook.php' style='font-size:14px;font-weight:bold'><u>���Ѿ�֪���ˣ�����˷���&gt;&gt;</u></a>";
      $wintitle = "���Է����ɹ���ʾ";
        $wecome_info = "���Է����ɹ���";
        $win = new OxWindow();
        $win->Init("","js/blank.js","post");
        $win->AddTitle("��ʾ��");
        $win->AddMsgItem("<div style='padding:20px;line-height:300%;font-size:14px'>$msg</div>");
        $winform = $win->GetWindow("hand");
        $win->Display();
    }
    else {
        ShowMsg('�ɹ�����һ�����ԣ�������˺������ʾ��','guestbook.php',0,3000);
    }
    exit();
}
//��ʾ��������
else
{
    setcookie('GUEST_BOOK_POS',GetCurUrl(),time()+3600,'/');

     $sql = 'select    dede_archives.* , dede_addon18.*   from   dede_addon18  left join   dede_archives  on  dede_archives.id= dede_addon18.aid  where aid=  '.$aid;
    
 
    $dlist = new DataListCP();
    $dlist->pageSize = 1;
    $dlist->SetParameter('gotopagerank',$gotopagerank);
    $dlist->SetTemplate(DEDETEMPLATE.'/plus/booking_room_con2.htm');
    $dlist->SetSource($sql);
    $dlist->Display();
}