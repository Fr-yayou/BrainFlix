const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const videoList = require('./videoList');
const videos = require('./videos');
const cors = require('cors');
const uniqid = require('uniqid');

router.use(cors());
router.use(bodyParser.json());
router.use(express.static('public'));

router.get('/', (req, res) => {
	res.json(videos);
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	const videoData = videoList.find(video => {
		return video.id === id;
	});
	res.json(videoData);
});

router.post('/', (req, res) => {
    console.log(req.body)
    const singleVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: 'Yanis',
        image: 'https://www.tripsavvy.com/thmb/8740ZwofHCLGhbcC0N2K-R5bcdQ=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mid-adult-man-skiing-down-mountain--golden--british-columbia--canada-480984215-5b50d2f2c9e77c005b1b87be.jpg'
    };

    const videoDetail = {
        id: singleVideo.id,
        title: req.body.title,
        channel: 'Yanis',
        image: 'https://www.tripsavvy.com/thmb/8740ZwofHCLGhbcC0N2K-R5bcdQ=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mid-adult-man-skiing-down-mountain--golden--british-columbia--canada-480984215-5b50d2f2c9e77c005b1b87be.jpg',
        description: req.body.description,
        views: '6000',
        likes: '30000',
        duration: '5,95',
        video: '',
        timestamp:'',
        comments: []
    };

    videos.push(singleVideo);
    videoList.push(videoDetail);

    fs.writeFileSync('./routes/videos.json', JSON.stringify(videos));
    fs.writeFileSync('./routes/videoList.json', JSON.stringify(videoList));
    res.send(singleVideo);


});


module.exports = router;