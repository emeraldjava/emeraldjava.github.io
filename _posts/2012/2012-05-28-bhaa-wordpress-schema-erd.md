---
title: BHAA Wordpress Schema ERD

category: blogger
# Pulled from Blogger. Last updated there on: Mon May 28 16:06:00 IST 2012
---
Using <a href="http://yuml.me/">yuml</a> to outline how the existing BHAA schema tables might interact with the wordpress tables. The 'user' is faily simple but how we handle 'events' will be a discussion point.  <img src="http://yuml.me/diagram/scruffy/class/[wp_user|+id;+email;{bg:cornsilk}]-[bhaa_runner|+id;+forename;+surname;+standard;+status;+company],[bhaa_runner]-[bhaa_company|+id;+name;],[wp_event_Q|+id;+tag;{bg:cornsilk}]-[bhaa_event|+id;+name;+tag;+date;+location;], [bhaa_event]-[bhaa_race|+id;+event;+distance;+starttime;], [bhaa_raceresult|+race;+runner;]-[bhaa_runner],[bhaa_raceresult]-[bhaa_race], [registration_Q|+runner;+event;+feepaid;+type;+realex_ref;]"></img> Tables ending in '_Q' are questionable.
