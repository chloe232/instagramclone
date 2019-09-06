if (self.CavalryLogger) { CavalryLogger.start_js(["v6QMe"]); }

__d("relay-experimental/useRefetchableFragmentNode",["invariant","relay-experimental/ProfilerContext","scheduler","relay-experimental/getRefetchMetadata","relay-experimental/getValueAtPath","relay-experimental/useFetchTrackingRef","relay-experimental/useFragmentNode","relay-experimental/useIsMountedRef","relay-experimental/useMemoVariables","relay-experimental/useRelayEnvironment","warning","relay-experimental/FragmentResource","relay-experimental/QueryResource","react","relay-runtime","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayStoreUtils"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("relay-experimental/FragmentResource").getFragmentResourceForEnvironment,i=b("relay-experimental/QueryResource").getQueryResourceForEnvironment,j=b("react").useCallback,k=b("react").useContext,l=b("react").useEffect,m=b("react").useMemo,n=b("react").useReducer,o=b("react").useRef,p=b("relay-runtime").__internal.fetchQuery,q=b("relay-runtime").createOperationDescriptor,r=b("relay-runtime").getFragmentIdentifier,s=b("relay-runtime").getSelector;function t(a,b){switch(b.type){case"refetch":var c;return babelHelpers["extends"]({},a,{refetchVariables:b.refetchVariables,fetchPolicy:b.fetchPolicy,renderPolicy:b.renderPolicy,onComplete:b.onComplete,refetchEnvironment:b.environment,mirroredEnvironment:(c=b.environment)!=null?c:a.mirroredEnvironment});case"reset":return{fetchPolicy:void 0,renderPolicy:void 0,onComplete:void 0,refetchVariables:null,mirroredEnvironment:b.environment,mirroredFragmentIdentifier:b.fragmentIdentifier};default:b.type;throw new Error("useRefetchableFragmentNode: Unexpected action type")}}function a(a,c,d){__p&&__p();var e=b("relay-experimental/useRelayEnvironment")(),f=b("relay-experimental/getRefetchMetadata")(a,d),g=f.refetchableRequest;f=f.fragmentRefPathInResponse;var h=r(a,c),j=n(t,{fetchPolicy:void 0,renderPolicy:void 0,onComplete:void 0,refetchVariables:null,refetchEnvironment:null,mirroredEnvironment:e,mirroredFragmentIdentifier:h}),p=j[0];j=j[1];var s=b("relay-experimental/useFetchTrackingRef")(),w=s.startFetch,x=s.disposeFetch,y=s.completeFetch;s=o(0);var z=p.refetchVariables,A=p.refetchEnvironment,B=p.fetchPolicy,C=p.renderPolicy,D=p.onComplete,E=p.mirroredEnvironment;p=p.mirroredFragmentIdentifier;A=(A=A)!=null?A:e;var F=i(A);e=k(b("relay-experimental/ProfilerContext"));E=A!==E||h!==p;p=b("relay-experimental/useMemoVariables")(z);var G=p[0];z=m(function(){return G!=null?q(g,G):null},[G,g]);var H;p=c;if(E)x(),j({type:"reset",environment:A,fragmentIdentifier:h});else if(z!=null){var I;A=v(A,z,B,C,(E=s.current)!=null?E:0,d,{start:w,complete:function(a){y();D&&D((a=a)!=null?a:null)}},e);B=A[0];C=A[1];H=B;E=b("relay-experimental/getValueAtPath")(C,f);p=E}w=b("relay-experimental/useFragmentNode")(a,p,d);e=w.data;A=w.disableStoreUpdates;B=w.enableStoreUpdates;l(function(){var a=H!=null?F.retain(H):null;return function(){a&&a.dispose()}},[F,h,z]);C=u(a,c,h,f,e,s,j,x,d);return{fragmentData:e,fragmentRef:p,refetch:C,disableStoreUpdates:A,enableStoreUpdates:B}}function u(a,c,d,e,f,g,h,i,k){__p&&__p();var l=b("relay-experimental/useIsMountedRef")(),m=f==null?void 0:f.id;return j(function(d,f){__p&&__p();var j;if(l.current!==!0){b("warning")(!1,"Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.",a.name,k);return{dispose:function(){}}}b("scheduler").unstable_getCurrentPriorityLevel()<b("scheduler").unstable_NormalPriority&&b("warning")(!1,"Relay: Unexpected call to `refetch` at a priority higher than expected on fragment `%s` in `%s`. It looks like you tried to call `refetch` under a high priority update, but updates that can cause the component to suspend should be scheduled at normal priority. Make sure you are calling `refetch` inside `startTransition()` from the `useSuspenseTransition()` hook.",a.name,k);c==null&&b("warning")(!1,"Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.",a.name,k,k);g.current=((j=g.current)!=null?j:0)+1;j=f==null?void 0:f.__environment;var n=f==null?void 0:f.fetchPolicy,o=f==null?void 0:f.renderPolicy;f=f==null?void 0:f.onComplete;var p=s(a,c),q,r;if(p==null)q={},r={};else if(p.kind==="PluralReaderSelector"){var t;q=(t=(t=p.selectors[0])==null?void 0:t.owner.variables)!=null?t:{};r=(t=(t=p.selectors[0])==null?void 0:t.variables)!=null?t:{}}else q=p.owner.variables,r=p.variables;t=babelHelpers["extends"]({},q,r,d);e.includes("node")&&!Object.prototype.hasOwnProperty.call(d,"id")&&(typeof m!=="string"&&b("warning")(!1,"useRefetchableFragment(): Expected result to have a string  `id` in order to refetch, got `%s`.",m),t.id=m);h({type:"refetch",refetchVariables:t,fetchPolicy:n,renderPolicy:o,onComplete:f,environment:j});return{dispose:i}},[d,m,h,i])}function v(a,b,c,d,e,f,j,k){var l=j.start,m=j.complete,n=i(a);j=h(a);k=k.wrapPrepareQueryResource(function(){return n.prepare(b,p(a,b,{networkCacheConfig:{force:!0}}),c,d,{start:l,error:m,complete:m},e)});j=j.read(k.fragmentNode,k.fragmentRef,f).data;j!=null||g(0,13942);return[k,j]}var w;e.exports=a}),null);