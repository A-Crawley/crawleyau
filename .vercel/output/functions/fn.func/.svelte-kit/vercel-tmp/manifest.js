export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ab4da718.js","imports":["_app/immutable/entry/start.ab4da718.js","_app/immutable/chunks/index.f98f3a93.js","_app/immutable/chunks/singletons.d6ae4b08.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.a7adaeb6.js","imports":["_app/immutable/entry/app.a7adaeb6.js","_app/immutable/chunks/index.f98f3a93.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
