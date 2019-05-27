module.exports = (multer, path) => {
	let storage = multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, path.join(__dirname, "../uploads/"));
		},
		filename: function(req, file, cb) {
			cb(
				null,
				new Date().toISOString() +
					"-" +
					+Math.random()
						.toString()
						.slice(2, 6) +
					file.originalname
			);
		}
	});
	const fileFilter = (req, file, cb) => {
		if (
			file.mimetype === "image/jpeg" ||
			file.mimetype === "image/png" ||
			file.mimetype === "application/pdf"
		) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	};
	return multer({
		storage: storage,
		limits: {
			fileSize: 1024 * 1024 * 5
		},
		fileFilter: fileFilter
	});
};
