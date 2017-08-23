# MiniForum

Midterm Project of the following members
----------------------

1. Ben Hur Adrian Raphael G. Tolentino

2. Reign Emmanuel O. Malto

3. Levie Anne T. Mariñas

4. John Homer Cadena


Instruction:
=============
1. Clone this repository so that you could have a copy of it in your computer.
2. Open it in your editor.
3. Create a .env file then copy the details of .env.sample to this
  - the .env file provides the details to access the database 
4. Set the database, the instruction on how to set it is provided below.
5. After setting the database open your command line or git then do this:

           $ cd [directory where the cloned folder is]
           $ nodemon or node index.js (*if you dont have a nodemon installed*)

Note: *To open this on your web browsers, Type: 

           localhost:30009/index*

Database
===========
* MySQL should be installed

* A database named dbforum must be created in mysql
* To import the dbforum.sql in the application, you have the following options:
    1. By using the phpmyadmin on your web browser, you can click the import.
    2. By using the cmd line :
    
           $  cd C:\wamp64\mysql\bin>
           $ mysql -u [username] -p[password] dbforum < [path where you placed your database]\dbforum.sql 
        
**Database table Descriptions**
===============================

Table Name: tbluser
----------------------
<html>
<body>
<TABLE>
   <TR ALIGN = "CENTER">
      <TH COLSPAN="6">
         <H3><BR>USERS TABLE</H3>
      </TH>
   </TR>
   <TH>Field</TH>
   <TH>Type </TH>
   <TH>Null</TH>
   <TH>Key</TH>
   <TH>Default</TH>
   <TH>Extra</TH>
<TR ALIGN="CENTER">
    <TD>intId</TD>
    <TD>int(11)</TD>
    <TD>NO</TD>
    <TD>PRIMARY KEY</TD>
    <TD>NULL</TD>
    <TD>auto_increment</TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>strUsername</TD>     
    <TD>varchar(30)</TD>   
    <TD>NO</TD>     
    <TD>UNIQUE INDEX</TD>      
    <TD>NULL</TD>
    <TD>            </TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>strPassword</TD>
    <TD>varchar(30)</TD>
    <TD>NO</TD>
    <TD>         </TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>strEmail</TD>
    <TD>varchar(50)</TD>
    <TD>NO</TD>
    <TD>UNIQUE INDEX</TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>
<TR ALIGN ="CENTER">
    <TD>dtmBdate</TD>
    <TD>date</TD>
    <TD>NO</TD>
    <TD>         </TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>
<TR ALIGN ="CENTER">
    <TD>strUserType</TD>
    <TD>char(7)</TD>
    <TD>NO</TD>
    <TD>         </TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>
</TABLE>
</body>
</html>


Table Name: tblpost
---------------------
<html>
<body>
<TABLE>
   <TR ALIGN = "CENTER">
      <TH COLSPAN="6">
         <H3><BR>POST TABLE</H3>
      </TH>
   </TR>
   <TH>Field</TH>
   <TH>Type </TH>
   <TH>Null</TH>
   <TH>Key</TH>
   <TH>Default</TH>
   <TH>Extra</TH>
 <TR ALIGN="CENTER">
    <TD>intpostId </TD>
    <TD>int(11)</TD>
    <TD>NO</TD>
    <TD>PRIMARY KEY</TD>
    <TD>NULL</TD>
    <TD>auto_increment</TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>intAuthorId</TD>     
    <TD>int(11)</TD>   
    <TD>NO</TD>     
    <TD>FOREIGN KEY</TD>      
    <TD>NULL</TD>
    <TD></TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>intPCategoryId</TD>     
    <TD>int(11)</TD>   
    <TD>NO</TD>     
    <TD>FOREIGN KEY</TD>      
    <TD>NULL</TD>
    <TD></TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>strPostTitle</TD>
    <TD>varchar(50)</TD>
    <TD>NO</TD>
    <TD></TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>strPostContent</TD>
    <TD>text</TD>
    <TD>YES</TD>
    <TD>         </TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>dtmPostDate</TD>
    <TD>date</TD>
    <TD>YES</TD>
    <TD>         </TD>
    <TD>NULL</TD>
    <TD>         </TD>
</TR>

</TABLE>
</body>
</html>

  
Table Name: tblcategories
-------------------------

<html>
<body>
<TABLE>
   <TR ALIGN = "CENTER">
      <TH COLSPAN="6">
         <H3><BR>POST CATEGORY TABLE</H3>
      </TH>
   </TR>
   <TH>Field</TH>
   <TH>Type </TH>
   <TH>Null</TH>
   <TH>Key</TH>
   <TH>Default</TH>
   <TH>Extra</TH>
<TR ALIGN="CENTER">
    <TD>iintCategoryId</TD>
    <TD>int(11)</TD>
    <TD>NO</TD>
    <TD>PRIMARY KEY</TD>
    <TD>NULL</TD>
    <TD>auto_increment</TD>
</TR>

<TR ALIGN ="CENTER">
    <TD>strCategoryName</TD>     
    <TD>varchar(50)</TD>   
    <TD>NO</TD>     
    <TD>UNIQUE INDEX</TD>      
    <TD>NULL</TD>
    <TD>            </TD>
</TR>
</html>
</body>
</TABLE>

