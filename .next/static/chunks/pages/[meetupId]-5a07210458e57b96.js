(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{8825:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[meetupId]",function(){return t(6998)}])},6998:function(){throw new Error('Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  x the name `getStaticPaths` is defined multiple times\n    ,-[23:1]\n 23 | export async function getStaticPaths() {\n    :                       ^^^^^^^|^^^^^^\n    :                              `-- previous definition of `getStaticPaths` here\n 24 |   const client = await MongoClient.connect(\n 25 |     "mongodb+srv://silas:Slim@20222@cluster0.eqvcw.mongodb.net/meetups?retryWrites=true&w=majority"\n 26 |   );\n 27 |   const db = client.db();\n 28 |   const meetupsCollection = db.collection("meetups");\n 29 | \n 30 |   const meetups = await meetupsCollection.find({}, { _id: meet }).toArray();\n 31 | \n 32 |   client.close();\n 33 | \n 34 |   return {\n 35 |     fallback: false,\n 36 |     paths: meetups.map((meetup) => ({\n 37 |       params: { meetupId: meetup._id.toString() },\n 38 |     })),\n 39 |   };\n 40 | }\n 41 | \n 42 | export async function getStaticPaths() {\n    :                       ^^^^^^^|^^^^^^\n    :                              `-- `getStaticPaths` redefined here\n    `----\n')}},function(n){n.O(0,[774,888,179],(function(){return e=8825,n(n.s=e);var e}));var e=n.O();_N_E=e}]);