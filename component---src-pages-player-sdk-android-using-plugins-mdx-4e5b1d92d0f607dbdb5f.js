(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{HDny:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return l})),t.d(a,"default",(function(){return s}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var n=t("7ljp"),i=t("XbGe");t("qKvR");function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var l={},d={_frontmatter:l},o=i.a;function s(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(o,r({},d,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"IBM Player SDK version 1.1.0 introduced a plugin system which enables you to extend the media player with additional features.\nPlugins will be provided by IBM and must be provided during player initialization in ",Object(n.b)("inlineCode",{parentName:"p"},"UstreamPlayer.initWithContent(ContentDescriptor, MediaPlayerModule)"),".\nThese extensions may require different player views than ",Object(n.b)("inlineCode",{parentName:"p"},"tv.ustream.player.android.PlayerView"),". PlayerView requirements for a plugin will always be stated\nin this documentation but can also be queried from the MediaPlayerModule instance itself using ",Object(n.b)("inlineCode",{parentName:"p"},"MediaPlayerModule.getSupportedPlayerViewType()"),".\nMake sure to always use the appropriate ",Object(n.b)("inlineCode",{parentName:"p"},"PlayerView"),"."),Object(n.b)("p",null,"Creation of the plugin is the user’s responsibility, use the constructor of the desired plugin, provide appropriate parameters and set listeners.\nWhen a plugin is passed to a UstreamPlayer instance it will be retained across configuration changes, however the listeners the user provided are not subject\nto the usual ",Object(n.b)("inlineCode",{parentName:"p"},"UstreamPlayer.attach()")," / ",Object(n.b)("inlineCode",{parentName:"p"},"UstreamPlayer.detach()")," working. The user needs to manually set and remove those listeners.\nThe current ",Object(n.b)("inlineCode",{parentName:"p"},"MediaPlayerModule")," in use can be retrieved from the player instance using ",Object(n.b)("inlineCode",{parentName:"p"},"UstreamPlayer.getMediaPlayerPlugin()")," which returns\na ",Object(n.b)("inlineCode",{parentName:"p"},"MediaPlayerModule")," that will be cast to the appropriate class that was set during ",Object(n.b)("inlineCode",{parentName:"p"},"initWithContent"),". The user must know which MediaPlayerModule was\nset during init."),Object(n.b)("p",null,"Please note that while a ",Object(n.b)("inlineCode",{parentName:"p"},"MediaPlayerPlugin")," provided through ",Object(n.b)("inlineCode",{parentName:"p"},"UstreamPlayer.initWithContent")," is retained across configuration changes,\nthe plugin itself might NOT support configuration changes at all due to plugin specific reasons. This will always be stated in the plugin’s documentation\nunder the ",Object(n.b)("strong",{parentName:"p"},"Plugin limitations")," section."),Object(n.b)("h2",null,"Ads Plugin"),Object(n.b)("p",null,"IBM Player SDK version 1.1.0 introduced ",Object(n.b)("strong",{parentName:"p"},"Ads Plugin")," (called ",Object(n.b)("inlineCode",{parentName:"p"},"AdsMediaPlayerModuleAndroid"),") which can be used to provide ads for the audience using the developer’s\n",Object(n.b)("em",{parentName:"p"},"Double Click for Publishers")," account."),Object(n.b)("p",null,"Supported features:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Pre-roll video ads"),Object(n.b)("li",{parentName:"ul"},"Mid-roll video ads with multiple configurable scheduling via ",Object(n.b)("inlineCode",{parentName:"li"},"AdScheduleRule"),"s"),Object(n.b)("li",{parentName:"ul"},"Customizable ad parameters via key/value pairs")),Object(n.b)("p",null,"Ads plugin needs to be instantiated and passed to the ",Object(n.b)("inlineCode",{parentName:"p"},"UstreamPlayer")," instance via ",Object(n.b)("inlineCode",{parentName:"p"},"initWithContent(ContentDescriptor, MediaPlayerModule)"),".\nUpon plugin creation the user can provide the following configuration data: ",Object(n.b)("inlineCode",{parentName:"p"},"String dfpTagUrl"),", ",Object(n.b)("inlineCode",{parentName:"p"},"AdScheduleRule scheduleRule"),",\nwhere ",Object(n.b)("inlineCode",{parentName:"p"},"dfpTagUrl")," points to the user’s ",Object(n.b)("em",{parentName:"p"},"Double Click for Publishers")," account and ",Object(n.b)("inlineCode",{parentName:"p"},"adScheduleRule")," is the class defining when to show ads.\nSee javadoc for details."),Object(n.b)("p",null,"Additionally, any time after creation the user can set:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"an ",Object(n.b)("inlineCode",{parentName:"li"},"AdStateListener")," using ",Object(n.b)("inlineCode",{parentName:"li"},"AdsMediaPlayerModuleAndroid.setAdStateListener(AdStateListener)")," which notifies the user when an ad is being displayed."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"AdData")," which is targeting metadata for ",Object(n.b)("em",{parentName:"li"},"DFP"),". Feel free to use your own meta and/or meta provided by ",Object(n.b)("inlineCode",{parentName:"li"},"MetaDataListener.onMetaData(MetaData)"),".")),Object(n.b)("h3",null,"Example usage"),Object(n.b)("p",null,"Add the Ads Plugin to your build use same local m2 repository in project root folder and add these lines to your gradle file (Google IMA SDK is a dependency of the Ads Plugin):"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-gradle"}),"implementation 'tv.ustream.player:ibm-player-sdk-android-plugin-ads-external:1.4.0@aar'\nimplementation 'com.google.ads.interactivemedia.v3:interactivemedia:3.11.3'\nimplementation 'com.google.android.gms:play-services-ads-identifier:17.0.0'\nimplementation 'androidx.browser:browser:1.0.0'\n")),Object(n.b)("p",null,"In ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," set configChanges settings in the player activity as:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<activity\n        android:name="com.my.company.PlayerActivity"\n        android:configChanges="orientation|screenSize|keyboardHidden"\n        android:label="@string/app_name" />\n')),Object(n.b)("p",null,"Create a UstreamPlayer as usual, but provide an ",Object(n.b)("inlineCode",{parentName:"p"},"AdsMediaPlayerModule")," at init:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),"ustreamPlayer = ustreamPlayerFactory.createUstreamPlayer(playerId);\nif (!ustreamPlayer.isInitialized()) {\n    final AdScheduleRule scheduleRule = new FixedIntervalRule(true, 60000); // Schedules a pre-roll and inserts mid-rolls after 60 seconds of playback time\n    ustreamPlayer.initWithContent(contentDescriptor, new AdsMediaPlayerModuleAndroid(/* AdsStateListener */this, DFP_TAG_URL, scheduleRule));\n}\n")),Object(n.b)("p",null,"In your application’s layout file use ",Object(n.b)("inlineCode",{parentName:"p"},"tv.ustream.player.android.plugin.ads.AdsPlayerView")," (instead of regular ",Object(n.b)("inlineCode",{parentName:"p"},"tv.ustream.player.android.PlayerView"),")."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-xml"}),'<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    android:background="@android:color/black">\n\n    <tv.ustream.player.android.plugin.ads.AdsPlayerView\n        android:id="@+id/playerview"\n        android:layout_height="match_parent"\n        android:layout_width="match_parent"\n        android:layout_gravity="center"/>\n\n</FrameLayout>\n')),Object(n.b)("p",null,"Retrieve the plugin after init:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),"AdsMediaPlayerModuleAndroid mediaPlayerPlugin = ustreamPlayer.getMediaPlayerPlugin();\n")),Object(n.b)("p",null,"Set an ",Object(n.b)("inlineCode",{parentName:"p"},"AdsStateListener")," on the plugin:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),"mediaPlayerPlugin.setAdStateListener(new AdStateListener() {\n    @Override\n    public void adStarted() {\n        // Customize UI elements during ad playback, e.g: hide seekbar\n        seekBar.setVisibility(View.INVISIBLE);\n        muteToggleButton.setVisibility(View.INVISIBLE);\n        fullScreenToggleButton.setVisibility(View.INVISIBLE);\n    }\n\n    @Override\n    public void adFinished() {\n        // Restore UI elements after ad playback\n        seekBar.setVisibility(View.VISIBLE);\n        muteToggleButton.setVisibility(View.VISIBLE);\n        fullScreenToggleButton.setVisibility(View.VISIBLE);\n    }\n});\n")),Object(n.b)("p",null,"Set meta for ",Object(n.b)("em",{parentName:"p"},"DFP")," using an ",Object(n.b)("inlineCode",{parentName:"p"},"AdData")," object:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'List<String> adKeywords = Arrays.asList("testKeyword1", "testKeyword2");\nMap<String, String> adExtras = new HashMap<>();\nadExtras.put("adExtraKey1", "adExtraValue1");\nadExtras.put("adExtraKey2", "adExtraValue2");\nAdData adData = new AdData("TestTitle", adKeywords, adExtras);\nmediaPlayerPlugin.setAdData(adData);\n')),Object(n.b)("p",null,"Everything else works just like it did before, no other code modification is required."),Object(n.b)("h3",null,"Plugin limitations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Ads Plugin does not support configuration changes, use ",Object(n.b)("inlineCode",{parentName:"li"},'android:configChanges="orientation|screenSize|keyboardHidden"')," in your player activity.\nThis limitations is imposed by Google IMA SDK on which we depend to show ads."),Object(n.b)("li",{parentName:"ul"},"Ads Plugin uses it’s own PlayerView: ",Object(n.b)("inlineCode",{parentName:"li"},"tv.ustream.player.android.plugin.ads.AdsPlayerView")),Object(n.b)("li",{parentName:"ul"},"Seeking while an ad is playing will seek the original content, as ad seeking is not possible")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-using-plugins-mdx-4e5b1d92d0f607dbdb5f.js.map