---
layout: post
title: xml-to-yaml
categories: ['running', 'programming', 'general']
tags: []
published: True

---

http://codebeautify.org/xml-to-yaml

<createResidentialCustomer xmlns="http://www.infonova.com/product/model">
    <channelId>162305</channelId>
	<operator>${operatorUsername}</operator>
    <contactDetails>
        <email>${contactDetailsEmailAddress}</email>
        <phoneNumberDay>${contactDetailsFixedNumber}</phoneNumberDay>
        <mobile>${contactDetailsMobile}</mobile>
        <preferredContactMethodKey>${contactDetailsPreferredContactMethodKey}</preferredContactMethodKey>
        <address>
            <city>0000</city>
            <zipCode>0000</zipCode>
            <streetName>${contactDetailsAddressAddress1}</streetName>
            <countryKey>${contactDetailsAddressCounty}</countryKey>
            <streetNumber2Suffix>${contactDetailsAddressExchangeCode}</streetNumber2Suffix>
            <stateKey>${contactDetailsAddressTown}</stateKey>
            <customField1>${contactDetailsAddressARD}</customField1>
            <customField2>${contactDetailsAddressAddress2}</customField2>
            <customField3>${contactDetailsAddressAddress3}</customField3>
            <customField4>${contactDetailsAddressLI}</customField4>
        </address>
    </contactDetails>
</createResidentialCustomer>

to

createResidentialCustomer: 
 channelId: 162305
 operator: "${operatorUsername}"
 contactDetails: 
  email: "${contactDetailsEmailAddress}"
  phoneNumberDay: "${contactDetailsFixedNumber}"
  mobile: "${contactDetailsMobile}"
  preferredContactMethodKey: "${contactDetailsPreferredContactMethodKey}"
  address: 
   city: 0000
   zipCode: 0000
   streetName: "${contactDetailsAddressAddress1}"
   countryKey: "${contactDetailsAddressCounty}"
   streetNumber2Suffix: "${contactDetailsAddressExchangeCode}"
   stateKey: "${contactDetailsAddressTown}"
   customField1: "${contactDetailsAddressARD}"
   customField2: "${contactDetailsAddressAddress2}"
   customField3: "${contactDetailsAddressAddress3}"
   customField4: "${contactDetailsAddressLI}"
 _xmlns: "http://www.infonova.com/product/model"
