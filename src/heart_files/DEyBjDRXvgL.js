if (self.CavalryLogger) { CavalryLogger.start_js(["opQFE"]); }

__d("relay-experimental/fetchQuery",["invariant","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h=b("relay-runtime").__internal,i=b("relay-runtime").createOperationDescriptor,j=b("relay-runtime").getRequest;function a(a,b,c,d){b=j(b);b.params.operationKind==="query"||g(0,13332);var e=i(b,c);return h.fetchQuery(a,e,d).map(function(){return a.lookup(e.fragment).data})}e.exports=a}),null);