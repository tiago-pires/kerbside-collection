(function(g){var window=this;'use strict';var Mib=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");c===-1&&(c=a.length);var d=a[0]==="-"?"-":"";d&&(a=a.substring(1));return d+(0,g.X8a)("0",Math.max(0,b-c))+a},Nib=function(){return{I:"svg",
X:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",X:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},Oib=function(){return{I:"svg",
X:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",X:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},Qib=function(a){typeof a==="number"?(this.date=Pib(a,0,1),x5(this,1)):g.Va(a)?(this.date=Pib(a.getFullYear(),a.getMonth(),a.getDate()),x5(this,a.getDate())):(this.date=new Date(g.$a()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),x5(this,a))},Pib=function(a,b,c){b=new Date(a,b,c);
a>=0&&a<100&&b.setFullYear(b.getFullYear()-1900);return b},x5=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},y5=function(a,b){g.qS.call(this,a,{I:"div",
S:"ytp-reminder-menu",X:{role:"menu",tabindex:"-1"},V:[{I:"div",S:"ytp-reminder-menu-contents",V:[{I:"div",S:"ytp-reminder-menu-items"}]}]},100,!0);this.j=b;this.C=[];this.menuPopupRenderer=void 0;this.items=this.Ea("ytp-reminder-menu-items");this.hide()},Rib=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},z5=function(a){g.U.call(this,{I:"div",
V:[{I:"button",Ma:["ytp-offline-slate-button","ytp-button"],V:[{I:"div",S:"ytp-offline-slate-button-icon",va:"{{icon}}"},{I:"div",S:"ytp-offline-slate-button-text",va:"{{text}}"}]}]});this.J=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.B=void 0;this.D=this.j=null;(this.G=this.Ea("ytp-offline-slate-button"))&&this.T(this.G,"click",this.K);this.hide()},Tib=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&g.S(c,Sib)?a.upcomingEventReminderButtonRenderer=g.S(c,Sib):c&&g.S(c,Sib)||(a.upcomingEventReminderButtonRenderer=null);A5(a)},A5=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.Zx(b.toggledText):"";a.update({text:c,icon:Uib(b.toggledIcon)})}else c=b.defaultText?g.Zx(b.defaultText):"",a.update({text:c,icon:Uib(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=Vib(a))?(c=b.text?g.Zx(b.text):"",a.update({text:c,icon:Uib(b.icon)}),a.show()):a.hide():a.hide()},Xib=function(a,b,c){a.D||(a.D=new g.Jv(a.J.U().rl));
var d={context:g.Zu(a.D.config_||g.Yu())};g.ex()&&(d.context.clientScreenNonce=g.ex());d.params=c;g.Kv(a.D,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.B&&(a.upcomingEventReminderButtonRenderer.currentState=a.B,a.B=void 0)},
onError:function(){Wib(a)},
onTimeout:function(){Wib(a)}})},Wib=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,A5(a)):a.upcomingEventReminderButtonRenderer&&(a.B=void 0,A5(a))},Uib=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return Nib();case "NOTIFICATIONS_NONE":return Oib();case "NOTIFICATIONS_ACTIVE":return g.hy();default:return null}},Vib=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.B||a.upcomingEventReminderButtonRenderer.currentState;a=g.v(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=g.S(c.value,Yib))&&c.state===b&&c.button&&g.S(c.button,g.vI))return g.S(c.button,g.vI);return null},Zib=function(a){g.U.call(this,{I:"div",
S:"ytp-offline-slate",V:[{I:"div",S:"ytp-offline-slate-background"},{I:"div",S:"ytp-offline-slate-bar",V:[{I:"span",S:"ytp-offline-slate-icon",V:[{I:"svg",X:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",X:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{I:"circle",X:{cx:"12",cy:"12",r:"3"}}]}]},{I:"span",S:"ytp-offline-slate-messages",V:[{I:"div",S:"ytp-offline-slate-main-text",X:{"aria-label":"{{label}}"},va:"{{mainText}}"},{I:"div",S:"ytp-offline-slate-subtitle-text",va:"{{subtitleText}}"}]},{I:"span",S:"ytp-offline-slate-buttons"}]},{I:"button",Ma:["ytp-offline-slate-close-button","ytp-button"],V:[g.dy()]},{I:"button",Ma:["ytp-offline-slate-open-button","ytp-button"],V:[g.by()]}]});var b=this;this.api=a;this.j=this.B=null;this.background=this.Ea("ytp-offline-slate-background");
this.C=this.Ea("ytp-offline-slate-bar");this.G=new g.np(function(){g.vp(b.C,"ytp-offline-slate-bar-fade")},15E3);
this.K=!1;this.D=new g.np(function(){g.vp(b.element,"ytp-offline-slate-collapsed")},15E3);
g.Q(this,this.D);g.Q(this,this.G);this.countdownTimer=new g.np(this.f4,1E3,this);this.T(a,"presentingplayerstatechange",this.l4);this.T(a,"livestatedata",this.Ta);a=this.Ea("ytp-offline-slate-close-button");this.T(a,"click",function(){g.vp(b.element,"ytp-offline-slate-collapsed")});
a=this.Ea("ytp-offline-slate-open-button");this.T(a,"click",function(){g.xp(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Ta(a);a=this.api.getPresentingPlayerType()===8&&!this.getVideoData().zm;var c=this.api.getPresentingPlayerType()===8;g.zp(this.element,"ytp-offline-slate-premiere-trailer",a);g.zp(this.element,"ytp-offline-slate-hide-background",c)},$ib=function(a,b,c){if(b){var d=b.subtitleText!=null?g.Zx(b.subtitleText):"";
c=c?c:b.mainText!=null?g.Zx(b.mainText):"";var e,f,h,l;b=(l=(e=b.mainText)==null?void 0:(f=e.accessibility)==null?void 0:(h=f.accessibilityData)==null?void 0:h.label)!=null?l:c;a.update({mainText:c,subtitleText:d,label:b});g.zp(a.element,"ytp-offline-slate-single-text-line",!d);g.zp(a.C,"ytp-offline-slate-bar-hidden",!c&&!d)}},B5=function(a,b){var c=(0,g.T)();
this.module="heartbeat";this.trigger=a;this.j=b;this.C=c},fjb=function(a){g.dU.call(this,a);
var b=this;this.N=!1;this.Z=0;this.G=!1;this.B=new g.np(function(){ajb(b)},0);
this.j=this.heartbeatParams=null;this.D=!1;this.K=new g.mi(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.qa=new g.Jv(void 0);this.attestationResponse=Promise.resolve(void 0);this.Y=Promise.resolve(void 0);this.utcOffsetMinutes=-(new Qib).getTimezoneOffset();this.C=new g.WE(this);g.Q(this,this.B);g.Q(this,this.C);bjb(this);cjb(this);this.C.T(a,"heartbeatparams",this.iH);this.C.T(a,"presentingplayerstatechange",this.y5);this.C.T(a,"videoplayerreset",this.z5);this.C.T(a,g.AD("heartbeat"),
this.onCueRangeEnter);this.D&&this.j&&djb(this,void 0,this.j);var c=new g.yD(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.yD(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.qf([c,d]);ejb(this)},ejb=function(a){var b=a.getVideoData();
!b.L("use_rta_only_for_player")&&b.im&&(b=b.botguardData)&&g.hL(b,a.player.U())},gjb=function(a){var b,c;
return g.J(function(d){if(d.j==1)return g.G(d,g.fua(),2);if(!d.B)return a.sequenceNumber>=3?d.return({error:"ATTESTATION_ERROR_VM_INTERNAL_ERROR"}):d.return(void 0);b=a.getVideoData();c={};return d.return(g.eua((c.cpn=b.clientPlaybackNonce,c.encryptedVideoId=b.videoId||"",c),1500))})},bjb=function(a){var b=a.getVideoData();
if(b.im)if(b.L("use_rta_for_player_hb"))a.attestationResponse=gjb(a);else if(b=new g.IBa(b),g.dL.isInitialized()||a.sequenceNumber>=3){var c=Promise,d=c.resolve,e=null;if(b.videoData.Fr){var f=g.JBa(b);if(f){e={};var h={};f=f.split("&");f=g.v(f);for(var l=f.next();!l.done;l=f.next())l=l.value.split("="),l.length===2&&(h[l[0]]=l[1]);h.r1a&&(e.webResponse=h.r1a);h.r1c&&(e.error=hjb[Number(h.r1c)]);e.challenge=b.videoData.Fr}}a.attestationResponse=d.call(c,e||void 0)}},ijb=function(a){var b=a.getVideoData();
if(!g.KQ(a.getVideoData())||b.oV)return!1;if(b.useInnertubeDrmService()&&b.G){a=b.G.flavor==="playready"&&b.L("html5_innertube_heartbeats_for_playready");var c=b.G.flavor==="widevine"&&b.L("html5_innertube_heartbeats_for_widevine");b=g.fO(b.G)&&b.L("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},jjb=function(a){if(ijb(a))return!!a.heartbeatParams;
var b=a.getVideoData();return g.KQ(a.getVideoData())&&b.useInnertubeDrmService()&&!b.pk&&!b.vE?!1:!!b.heartbeatToken},C5=function(a,b){if(!a.B.isActive()&&a.N){var c=a.getVideoData();
if(jjb(a)||c.isLivePlayback){if(b===void 0)if(a.G)if(a.D)b=7500;else{var d;b=((d=a.heartbeatParams)==null?0:d.interval)?a.heartbeatParams.interval*1E3:a.getVideoData().F4||6E4}else b=1E3;a.B.start(b)}}},njb=function(a,b,c){b.Kn&&(c=g.aj(c,{internalipoverride:b.Kn}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.Ab&&(d.kpt=b.Ab);c=g.aj(c,d);g.ds(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.B.isActive()&&D5(a)){a.K.reset();a.sequenceNumber++;e=e.responseText;var f=kjb(e);if(f){a.player.gb("onHeartbeat",f);var h=f.status==="ok"?f.stop_heartbeat?2:0:f.status==="stop"?1:f.status==="live_stream_offline"?0:-1}else h=(h=e.match(ljb))?h[1]==="0"?0:1:-1;mjb(a,void 0,f,e,h)}},
onError:function(e){D5(a)&&E5(a,!0,"net-"+e.status)},
onTimeout:function(){D5(a)&&E5(a,!0,"timeout")},
withCredentials:!0})},ajb=function(a){var b,c;
g.J(function(d){b=a.player.U();c=a.getVideoData();if(!D5(a))return d.return();if(ijb(a))return ojb(a,b,c),d.Ga(0);bjb(a);return g.G(d,pjb(a,b,c),0)})},ojb=function(a,b,c){var d;
if((d=a.heartbeatParams)!=null&&d.url){var e=g.aj(a.heartbeatParams.url,{request_id:g.gqa()});c.ra&&(e=g.aj(e,{vvt:c.ra}),c.mdxEnvironment&&(e=g.aj(e,{mdx_environment:c.mdxEnvironment})));g.tP(b,c.oauthToken).then(function(f){f&&(e=g.aj(e,{access_token:f}));njb(a,c,e)})}},D5=function(a){var b=a.getVideoData();
return a.player.getPresentingPlayerType()===3||g.W(a.player.getPlayerStateObject(a.getPlayerType()),4)?!1:jjb(a)||b.isLivePlayback?!0:(F5(a),!1)},pjb=function(a,b,c){var d,e,f,h,l,m,n,p,q,r,t,u,x,A,C,F,H,M,O,R;
return g.J(function(aa){if(aa.j==1)return d="player/heartbeat",f={videoId:c.videoId,sequenceNumber:a.sequenceNumber,heartbeatServerData:(e=a.ra)!=null?e:c.heartbeatServerData},a.Y=a.attestationResponse,c.im?g.G(aa,a.Y,3):aa.Ga(2);aa.j!=2&&(f.attestationResponse=aa.B);h=g.mR(c);m=(l=h.client)!=null?l:{};m.utcOffsetMinutes=a.utcOffsetMinutes;f.context=h;f.cpn=c.clientPlaybackNonce;if(n=typeof Intl!=="undefined"?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)m.timeZone=n;p={heartbeatChecks:[]};
if(q=c.getPlayerResponse())c.heartbeatToken&&(f.heartbeatToken=c.heartbeatToken),(r=q.playabilityStatus)&&(t=r.liveStreamability)&&t.liveStreamabilityRenderer&&p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");g.UC(b)&&(p.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),u=qjb(a),x={},u!==null&&(x.clientPlayerPositionUtcMillis=u),C=(A=a.player.Bb())==null?void 0:g.BU(A),H=((F=C)==null?void 0:F.freePreviewWatchedDuration)||
0,H>0&&(x.freePreviewWatchedDuration={seconds:""+H}),p.unpluggedParams=x);f.heartbeatRequestParams=p;c.isLivePlayback?(M=qjb(a),M!==null&&(f.playbackState||(f.playbackState={}),f.playbackState.playbackPosition={utcTimeMillis:M})):b.L("enable_heartbeat_vod_playback_position")&&(O=rjb(a),O!==null&&(f.playbackState||(f.playbackState={}),f.playbackState.playbackPosition={streamTimeMillis:O}));a.player.publish("heartbeatRequest",f);R={timeout:3E4,onSuccess:function(ia){if(!a.B.isActive()&&D5(a)){var la=
a.getVideoData(),Z=la.im&&a.Y==null,pa;la.im=!((pa=ia.heartbeatAttestationConfig)==null||!pa.requiresAttestation)||Z;Z=ia.playabilityStatus;pa=JSON.stringify(Z)||"{}";ia.authenticationMismatch&&a.player.oa("authshear",{});var N=-1;var ua=ia.playabilityStatus;ua&&(a.player.gb("onHeartbeat",ua),ua.status==="OK"?N=ia.stopHeartbeat?2:0:ua.status==="UNPLAYABLE"?N=1:ua.status==="LIVE_STREAM_OFFLINE"&&(N=0));a.sequenceNumber&&N===-1||a.K.reset();a.sequenceNumber++;ia.heartbeatServerData&&(a.ra=ia.heartbeatServerData);
la.xE=ia;(ua=ia.playerCueRangeSet)&&g.jQ(la,ua);ia.playerCueRanges&&ia.playerCueRanges.length>0&&(la.cueRanges=ia.playerCueRanges);var y,V;((y=ia.progressBarConfig)==null?0:y.progressBarStartPosition)&&((V=ia.progressBarConfig)==null?0:V.progressBarEndPosition)&&(la.progressBarStartPosition=ia.progressBarConfig.progressBarStartPosition,la.progressBarEndPosition=ia.progressBarConfig.progressBarEndPosition);la.compositeLiveIngestionOffsetToken=ia.compositeLiveIngestionOffsetToken;ia.compositeLiveStatusToken!==
la.compositeLiveStatusToken&&(la.compositeLiveStatusToken=ia.compositeLiveStatusToken);la.publish("dataupdated");mjb(a,ia,Z,pa,N)}},
onError:function(ia){D5(a)&&E5(a,!0,"net-"+ia.status)},
onTimeout:function(){D5(a)&&E5(a,!0,"timeout")}};
g.tP(b,g.dR(c)).then(function(ia){ia&&(R.FX="Bearer "+ia);g.Kv(a.qa,d,f,R)});
g.wa(aa)})},mjb=function(a,b,c,d,e){e===-1?(c="decode "+g.Ye(d,3),E5(a,!1,c)):e===2?(F5(a),a.G=!0):(a.Z=0,a.B.stop(),e===1?(a.G=!1,c&&c.errorCode==="PLAYABILITY_ERROR_CODE_EMBARGOED"&&a.player.ip(!0),e="pe."+(c==null?void 0:c.errorCode)+";ps."+(c==null?void 0:c.status),a.player.Pf("heartbeat.stop",2,a.ag(d),e),g.Rt("heartbeatActionPlayerHalted",sjb(c)),(b==null?0:b.videoTransitionEndpoint)&&c&&(b=b.videoTransitionEndpoint,(d=g.S(b,g.vQ))&&tjb(a,d,c,{itct:b==null?void 0:b.clickTrackingParams}))):(a.G=
!0,d=0,a.D&&c&&(d=djb(a,b,c),a.player.publish("livestatedata",c)),d?C5(a,d):C5(a)))},djb=function(a,b,c){var d=c.liveStreamability&&c.liveStreamability.liveStreamabilityRenderer,e=!(!d||!(d.switchStreamsImmediately||d.transitionTiming&&d.transitionTiming==="STREAM_TRANSITION_TIMING_IMMEDIATELY"));
b=ujb(a,b,d);var f=a.getVideoData(),h=a.player.getPlayerStateObject(a.getPlayerType()),l=h.isPlaying()&&!g.RQ(f)&&!a.player.isAtLiveHead(a.getPlayerType());if(f.U().qc()){var m,n=((m=a.player.Le())==null?void 0:m.wc())||{};n.status=c.status||"";n.dvr=""+ +l;n["switch"]=""+ +e;n.ended=""+ +!(!d||!d.displayEndscreen);a.player.oa("heartbeat",n)}if(l&&!e)return b;e=d&&d.streamTransitionEndpoint&&g.S(d.streamTransitionEndpoint,g.vQ);if((d&&d.transitionTiming)==="STREAM_TRANSITION_TIMING_AT_STREAM_END")a.getVideoData().transitionEndpointAtEndOfStream=
e;else if(e&&tjb(a,e,c))return b;if(c.status.toUpperCase()==="OK"){e=d&&d.broadcastId;m=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;l=e!==m&&e!=null;if(!g.OQ(f)||l){var p={video_id:f.videoId};f.GG&&(p.is_live_destination="1");a.player.L("web_player_heartbeat_request_watch_next")||(p.disable_watch_next=!0,p.raw_watch_next_response=f.getWatchNextResponse());p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;
p.force_gvi=f.Jn;p.Zm=f.Zm;f.K&&(p.vss_credentials_token=f.K,p.vss_credentials_token_type=f.Dn);f.ra&&(p.vvt=f.ra);d=void 0;g.OQ(f)?l&&(d=new B5("broadcastIdChanged",m+","+e),a.yL("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",c)):(e&&(d=new B5("formatsReceived",""+e)),a.yL("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",c));a.player.loadVideoByPlayerVars(p,void 0,void 0,void 0,d);return b}a.player.Ig("heartbeat",
a.getPlayerType())}d&&d.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.K=!0,a.Ib&&a.api.SC()):h.isBuffering()&&(f=((p=a.player.Le())==null?void 0:p.wc())||{},a.player.oa("hbse",f,!0),a.player.SC(),a.player.gb("onLiveMediaEnded",c)));return b},ujb=function(a,b,c){return a.player.L("web_player_use_heartbeat_poll_delay_ms")&&(a=Number(b==null?void 0:b.pollDelayMs))?a:(c=Number(c==null?void 0:c.pollDelayMs))?c:0},E5=function(a,b,c){var d=a.player.U();
if(!a.B.isActive()){a.B.stop();a.Z++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.H4||b&&!g.KQ(a.getVideoData())&&!jjb(a)&&f.isLivePlayback)f=!1;else{var h,l;((l=a.heartbeatParams)==null?0:l.retries)?h=a.heartbeatParams.retries:h=f.G4||5;f=a.Z>=h}f?(g.Rt("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:sjb()),(b=a.getVideoData())&&b.isLivePlayback?a.player.Pf(e,1,"Video playback interrupted. Please try again.",c):a.player.Pf(e,1,"Sorry, there was an error while licensing this video.",
c)):(d.L("html5_report_non_fatal_heartbeat_error")&&a.player.gt(e,{msg:c}),C5(a,a.K.getValue()),g.ni(a.K))}},sjb=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},F5=function(a){a.Z=0;
a.B.stop();a.G=!1;a.sequenceNumber=0},cjb=function(a){var b=a.getVideoData(),c=a.player.U();
if(b.isLivePlayback)if(g.vO(c.G)){a.D=!0;a.N=!0;if(!g.WC(c)||g.UC(c))a.offlineSlate=new Zib(a.player),g.Q(a,a.offlineSlate),g.PR(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;((d=a.j)==null?void 0:d.status)!=="UNPLAYABLE"&&(a.j?(d=ujb(a,void 0,a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?C5(a,d):C5(a,7500):C5(a,1E3))}else a.player.Pf("html5.unsupportedlive",2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");
else g.sb(b.Ia,"heartbeat")&&a.player.Ig("heartbeat",a.getPlayerType())},tjb=function(a,b,c,d){var e=b&&b.videoId;
return e?(a.player.Ep(e,Object.assign({},{autonav:"1"},d||{}),void 0,!0,!0,b,g.dR(a.getVideoData())),a.yL("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",c),!0):!1},qjb=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(a*1E3):null},rjb=function(a){return(a=a.player.getCurrentTime(a.getPlayerType()))&&isFinite(a)?""+Math.floor(a*1E3):null},kjb=function(a){try{var b=JSON.parse(a);
return b!=null?b:void 0}catch(c){}},vjb={ERAS:["BC",
"AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
vjb={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["am","pm"],DATEFORMATS:["EEEE d MMMM y",
"d MMMM y","d MMM y","dd/MM/y"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};var hjb=["ATTESTATION_ERROR_UNKNOWN","ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"];g.k=Qib.prototype;g.k.LY=vjb.FIRSTDAYOFWEEK;g.k.MY=vjb.FIRSTWEEKCUTOFFDAY;
g.k.clone=function(){var a=new Qib(this.date);a.LY=this.LY;a.MY=this.MY;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.years||a.months){var b=this.getMonth()+a.months+a.years*12,c=this.getYear()+Math.floor(b/12);b%=12;b<0&&(b+=12);a:{switch(b){case 1:var d=c%4!=0||c%100==0&&c%400!=0?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=c>=0&&c<=99?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+a.days*864E5),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),x5(this,a.getDate()))};
g.k.toString=function(){var a=this.getFullYear(),b=a<0?"-":a>=1E4?"+":"";return[b+Mib(Math.abs(a),b?6:4),Mib(this.getMonth()+1,2),Mib(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var wjb=new g.Uq("addUpcomingEventReminderEndpoint");var xjb=new g.Uq("removeUpcomingEventReminderEndpoint");var yjb=new g.Uq("updateUpcomingEventReminderButtonStateCommand");var Sib=new g.Uq("upcomingEventReminderButtonRenderer"),Yib=new g.Uq("upcomingEventReminderButtonStateRenderer");g.z(y5,g.qS);
y5.prototype.updateMenuItems=function(){var a=this,b=Rib(this),c=0;c=0;for(var d={};c<b.length;d={f_:void 0},c++){var e=this.C[c];e||(e=new g.U({I:"div",S:"ytp-reminder-menu-item",X:{role:"menuitem",tabindex:"0"},V:[{I:"div",S:"ytp-reminder-menu-item-icon",va:"{{icon}}"},{I:"div",S:"ytp-reminder-menu-item-label",va:"{{text}}"}]}),d.f_=c,e.listen("click",function(h){return function(){var l=h.f_;a.Mb();l=Rib(a)[l];a.publish("reminderMenuItemClicked",l.serviceEndpoint||l.command)}}(d)),e.Ja(this.items),
this.C[c]=e);
var f=b[c];d=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":d=Nib();break;case "NOTIFICATIONS_NONE":d=Oib();break;case "NOTIFICATIONS_ACTIVE":d=g.hy()}f=f.text?g.Zx(f.text):"";e.update({icon:d,text:f})}for(;c<this.C.length;)this.C.pop().dispose();c===0?this.Mb():this.qd(this.j)};
y5.prototype.hide=function(){this.j&&this.j.removeAttribute("aria-haspopup");g.qS.prototype.hide.call(this)};
y5.prototype.show=function(){this.j&&this.j.setAttribute("aria-haspopup","true");g.qS.prototype.show.call(this)};
y5.prototype.xa=function(){g.ib(this.C);g.qS.prototype.xa.call(this)};g.z(z5,g.U);
z5.prototype.K=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.C(a.toggledServiceEndpoint):this.C(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;A5(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.Ib)this.j.Mb();else{var b=Vib(this);b&&this.C(b.serviceEndpoint||b.command);b=((a=g.S(b==null?void 0:b.command,g.az))==null?void 0:a.commands)||[];a:{a=g.v(b);for(var c=a.next();!c.done;c=a.next()){var d=b=void 0;if(c=(b=g.S(c.value,g.P$a))==
null?void 0:(d=b.popup)==null?void 0:d.menuPopupRenderer){a=c;break a}}a=void 0}this.j||(this.j=new y5(this.J,this.G),this.j.Ja(this.element),g.Q(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.C,this));b=this.j;b.menuPopupRenderer=a;b.updateMenuItems()}};
z5.prototype.C=function(a){var b=g.S(a,wjb),c=g.S(a,xjb);if(a&&(b||c)){if(b){var d=b;var e="notification/add_upcoming_event_reminder"}else c&&(d=c,e="notification/remove_upcoming_event_reminder");if(e&&d&&d.params)for(Xib(this,e,d.params),a=g.v(d.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&g.S(b,yjb)){this.B=g.S(b,yjb).state;A5(this);break}}};g.z(Zib,g.U);g.k=Zib.prototype;g.k.getPlayerType=function(){if(this.api.getPresentingPlayerType()===8)return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Ta=function(a){var b,c,d=a==null?void 0:(b=a.liveStreamability)==null?void 0:(c=b.liveStreamabilityRenderer)==null?void 0:c.offlineSlate;if(d){this.B=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.f4():$ib(this,b);var e,f,h,l;if(c=a==null?void 0:(e=a.liveStreamability)==null?void 0:(f=e.liveStreamabilityRenderer)==null?void 0:(h=f.offlineSlate)==null?void 0:(l=h.liveStreamOfflineSlateRenderer)==null?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>
e&&(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new z5(this.api),this.j.Ja(this.Ea("ytp-offline-slate-buttons")),g.Q(this,this.j)),Tib(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&Tib(this.j,null,null);this.B=a}else this.B=null;this.l4()};
g.k.l4=function(a){if(this.api.getPresentingPlayerType()===8)var b=!0;else{var c=this.api.getPlayerStateObject(),d=this.getVideoData();b=d.isLivePlayback&&(c.isBuffering()||g.W(c,2)||g.W(c,64));var e=d.autonavState===2&&g.W(c,2);c=c.isPlaying()&&!g.RQ(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.B?this.Ib?(a==null?0:g.Zy(a,2))&&!this.getVideoData().zm&&(g.xp(this.element,"ytp-offline-slate-collapsed"),this.D.stop(),g.xp(this.C,"ytp-offline-slate-bar-fade"),this.G.start()):(this.show(),
this.D.start(),this.api.publish("offlineslatestatechange"),this.K&&this.api.SC()):this.Ib&&(this.hide(),this.api.publish("offlineslatestatechange"))};
g.k.f4=function(){var a,b,c,d,e=(a=this.B)==null?void 0:(b=a.liveStreamability)==null?void 0:(c=b.liveStreamabilityRenderer)==null?void 0:(d=c.offlineSlate)==null?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.$a()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?($ib(this,e),this.countdownTimer.stop()):($ib(this,e,g.hz(b-a)),g.op(this.countdownTimer)))};
g.k.xa=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.U.prototype.xa.call(this)};B5.prototype.B=function(a){return this.trigger&&a.trigger?this.module===a.module&&this.trigger===a.trigger&&this.j===a.j:!1};
B5.prototype.isExpired=function(){return(0,g.T)()-this.C>6E4};
B5.prototype.toString=function(){return this.module+":"+this.trigger+":"+this.j};g.z(fjb,g.dU);g.k=fjb.prototype;g.k.xa=function(){F5(this);this.player.uf("heartbeat");g.dU.prototype.xa.call(this)};
g.k.onCueRangeEnter=function(){this.N=!0;C5(this,2E3)};
g.k.iH=function(a){this.heartbeatParams=a;C5(this,2E3)};
g.k.y5=function(a){var b;this.player.getPresentingPlayerType()!==8&&((b=this.j)==null?void 0:b.status)!=="UNPLAYABLE"&&(g.W(a.state,2)||g.W(a.state,64)?(F5(this),this.D&&(this.N=!0,C5(this,1E3))):(g.W(a.state,1)||g.W(a.state,8))&&C5(this,2E3))};
g.k.z5=function(){this.player.getPresentingPlayerType()!==3&&C5(this,2E3)};
g.k.getPlayerType=function(){if(this.player.getPresentingPlayerType()===8)return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.yn=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.yL=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Rt("heartbeatActionPlayerTransitioned",a)};
g.k.ag=function(a){var b="LICENSE",c=kjb(a);if(c)return c.reason||g.KU[b]||"";(a=a.match(ljb))&&(a=Number(a[1]))&&(b=g.owa(a));return g.KU[b]||""};
g.k.rG=function(){return!!this.offlineSlate&&this.offlineSlate.Ib};
var ljb=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.cU("heartbeat",fjb);})(_yt_player);
