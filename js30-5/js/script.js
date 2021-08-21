const inputs = document.querySelectorAll('.option-input input');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadFile = document.getElementById('save');
const uploadFile = document.getElementById('upload-file');
const resetBtn = document.getElementById('reset-btn');

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// Upload File
uploadFile.addEventListener("change", () => {
	// Get File
	const file = document.getElementById("upload-file").files[0];
	// Init FileReader API
	const reader = new FileReader();

	// Check for file
	if (file) {
		// Set file name
		fileName = file.name;
		// Read data as URL
		reader.readAsDataURL(file);
	}

	// Add image to canvas
	reader.addEventListener(
		"load",
		() => {
			// Create image
			img = new Image();
			// Set image src
			img.src = reader.result;
			// On image load add to canvas
			img.onload = function () {
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0, img.width, img.height);
				canvas.removeAttribute("data-caman-id");
			};
		},
		false
	);
});