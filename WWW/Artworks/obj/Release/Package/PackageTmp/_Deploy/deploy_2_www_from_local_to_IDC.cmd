@ECHO OFF

FormatXml ..\Web.config Web.config.master
	
	XPath Web.config.master /configuration/appSettings/add[@key='HTTPFILE3'] value //file3.funshop.co.kr/artworks
	XPath Web.config.master /configuration/appSettings/add[@key='IsLIVE'] value 1
		
	ROBOCOPY D:\Project\artworks\WWW.Deploy \\m1.server.artworks.co.kr\C$\_FUNSHOP\ARTWORKS-STAGE /MIR /XF *.sln *.suo *.csproj /XD Promotion _Deploy
	COPY Web.config.master \\m1.server.artworks.co.kr\c$\_FUNSHOP\ARTWORKS-STAGE\Web.config

DEL Web.config.master
