(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{146:function(e,t,a){e.exports=a(289)},151:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),i=(a(151),a(34)),s=a(296),u=a(301),o=a(28),d=a(43),E=a.n(d),T=a(79),m=a(80),k=a.n(m),f=function(e){return{type:"FETCH_SELECTED_TRACK_SUCCESS",payload:e}},C=function(e){return Object.keys(e).map((function(t){return Object(o.a)({id:t},e[t])}))},p=a(300),h=a(295),S=a(293),v=function(){return r.a.createElement(p.a,{"data-testid":"spinner",padded:!0},r.a.createElement(h.a,{active:!0,inverted:!0},r.a.createElement(S.a,null)))},_=function(e){var t=e.trackList,a=e.selectedTrackId,n=e.selectTrack;return r.a.createElement(s.a,{celled:!0,padded:!0,"data-testid":"track-table"},r.a.createElement(s.a.Header,null,r.a.createElement(s.a.Row,null,r.a.createElement(s.a.HeaderCell,null,"#"),r.a.createElement(s.a.HeaderCell,null,"Title"),r.a.createElement(s.a.HeaderCell,null,"Artist"))),r.a.createElement(s.a.Body,null,t.map((function(e){var t=e.id,c=e.artist,l=e.track_title;return r.a.createElement(s.a.Row,{className:"track-row",key:t,active:a===t,onClick:function(){return n(t)}},r.a.createElement(s.a.Cell,null,t),r.a.createElement(s.a.Cell,null,c),r.a.createElement(s.a.Cell,null,l))}))))},g=Object(i.b)((function(e){return{fetching:e.fetchingTrackList,trackList:e.trackList,selectedTrackId:e.selectedTrackId}}),{fetchTrackList:function(){return function(){var e=Object(T.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_TRACK_LIST"}),e.next=3,k.a.get("/all_tracks");case 3:return a=e.sent.data.tracks,e.abrupt("return",t({type:"FETCH_TRACK_LIST_SUCCESS",payload:C(a)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},selectTrack:function(e){return function(){var t=Object(T.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"SELECT_TRACK",payload:e}),a({type:"FETCH_SELECTED_TRACK"}),t.next=4,k.a.post("/track",{id:e});case 4:return n=t.sent.data.track,t.abrupt("return",a(f(n)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.fetchTrackList,a=e.fetching,c=e.trackList,l=e.selectTrack,i=e.selectedTrackId;return Object(n.useEffect)((function(){t()}),[t]),r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{as:"h2"},r.a.createElement(u.a.Content,null,"Tracks")),a?r.a.createElement(v,null):r.a.createElement(_,{trackList:c,selectedTrackId:i,selectTrack:l}))})),b=a(297),L=a(299),y=function(e){var t=e.artist,a=e.title;return r.a.createElement(b.a,{"data-testid":"details-card"},r.a.createElement(b.a.Content,{header:a}),r.a.createElement(b.a.Content,{description:"by ".concat(t)}))},w=Object(i.b)((function(e){return{selectedTrackId:e.selectedTrackId,fetchingSelectedTrack:e.fetchingSelectedTrack,selectedTrack:e.selectedTrack}}))((function(e){var t=e.fetchingSelectedTrack,a=e.selectedTrack;return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{as:"h2"},r.a.createElement(u.a.Content,null,"Details")),t&&r.a.createElement(v,null),a?r.a.createElement(y,{artist:a.artist,title:a.track_title}):r.a.createElement(L.a,{"data-testid":"info-message",className:"info-message"},"Select a track to view its details"))})),j=a(294),O=a(302),I=a(35),R=a(136),A={fetchingTrackList:!1,trackList:[],selectedTrackId:void 0,fetchingSelectedTrack:!1,selectedTrack:void 0},H=Object(I.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_TRACK":return Object(o.a)({},e,{selectedTrackId:t.payload});case"FETCH_TRACK_LIST":return Object(o.a)({},e,{fetchingTrackList:!0});case"FETCH_TRACK_LIST_SUCCESS":return Object(o.a)({},e,{trackList:t.payload,fetchingTrackList:!1});case"FETCH_SELECTED_TRACK":return Object(o.a)({},e,{fetchingSelectedTrack:!0});case"FETCH_SELECTED_TRACK_SUCCESS":return Object(o.a)({},e,{selectedTrack:t.payload,fetchingSelectedTrack:!1});default:return e}}),Object(I.c)(Object(I.a)(R.a)));var F=function(){return r.a.createElement(i.a,{store:H},r.a.createElement(j.a,{className:"padded-container"},r.a.createElement(u.a,{as:"h1"},"Music Tracks Demo App"),r.a.createElement(O.a,{columns:2,divided:!0},r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Column,null,r.a.createElement(g,null)),r.a.createElement(O.a.Column,null,r.a.createElement(w,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.7f1f76ff.chunk.js.map