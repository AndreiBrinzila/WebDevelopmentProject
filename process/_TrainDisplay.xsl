<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:x="http://api.irishrail.ie/realtime/">
<xsl:output method="html"/>
<xsl:output omit-xml-declaration="yes" encoding="UTF-8"/>
<xsl:template match="/x:ArrayOfObjStationData">
  <h3><xsl:value-of select="ArrayOfObjStationData/objStationData/Stationfullname"/> Train &amp; Dart Timetable</h3>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Departed From</th>
      <th style="text-align:left">Destination</th>
	 	 <th style="text-align:left">Train Type</th>
	 	 <th style="text-align:left">Train Due</th>
    </tr>
		<xsl:for-each select="ArrayOfObjStationData/objStationData">
			<xsl:sort select="Duein"/>
    <tr>
      <td><xsl:value-of select="Origin"/></td>
      <td><xsl:value-of select="Destination"/></td>
	 		<td><xsl:value-of select="Traintype"/></td>
	  	<td><xsl:value-of select="Duein"/></td>
    </tr>
		</xsl:for-each>
  </table>
</xsl:template>
</xsl:stylesheet>

