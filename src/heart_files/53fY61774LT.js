if (self.CavalryLogger) { CavalryLogger.start_js(["9SY3V"]); }

__d("relay-experimental/useQueryNode",["relay-experimental/ProfilerContext","react","relay-experimental/useFetchTrackingRef","relay-experimental/useFragmentNode","relay-experimental/useRelayEnvironment","relay-experimental/QueryResource","relay-runtime"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("relay-experimental/QueryResource").getQueryResourceForEnvironment,h=b("relay-runtime").__internal.fetchQuery,i=b("react").useContext,j=b("react").useEffect;function a(a){__p&&__p();var c,d=b("relay-experimental/useRelayEnvironment")(),e=i(b("relay-experimental/ProfilerContext")),f=g(d),k=a.query,l=a.componentDisplayName,m=a.fetchKey,n=a.fetchPolicy,o=(c=a.fetchObservable)!=null?c:h(d,k,{networkCacheConfig:a.networkCacheConfig});c=b("relay-experimental/useFetchTrackingRef")();var p=c.startFetch,q=c.completeFetch,r=e.wrapPrepareQueryResource(function(){return f.prepare(k,o,n,null,{start:p,complete:q,error:q},m)});j(function(){var a=f.retain(r);return function(){a.dispose()}},[d,k]);a=r.fragmentNode;c=r.fragmentRef;e=b("relay-experimental/useFragmentNode")(a,c,l);d=e.data;return d}e.exports=a}),null);