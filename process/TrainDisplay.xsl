<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:x="http://api.irishrail.ie/realtime/">
<xsl:template match="/">
<html> 
<body>
  <h3><xsl:value-of select="x:ArrayOfObjStationData/objStationData/Stationfullname"/> Train &amp; Dart Timetable</h3>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Departed From</th>
      <th style="text-align:left">Destination</th>
	 	 <th style="text-align:left">Train Type</th>
	 	 <th style="text-align:left">Train Due</th>
    </tr>
		<xsl:for-each select="x:ArrayOfObjStationData/objStationData">
			<xsl:sort select="x:Duein"/>
    <tr>
      <td><xsl:value-of select="x:Origin"/></td>
      <td><xsl:value-of select="x:Destination"/></td>
	 		<td><xsl:value-of select="x:Traintype"/></td>
	  	<td><xsl:value-of select="x:Duein"/></td>
    </tr>
		</xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

