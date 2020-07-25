const splitFile = require('split-file')
const names = Array.from({ length: 3 }, (v, number) => `outputs/someVideo.mp4.sf-part${number+1}`)
splitFile.mergeFiles(names,'../someVideo.mp4').then(()=>console.log('Done'))