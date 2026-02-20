function openScroll() {
	const scroll = document.getElementById('scroll-overlay');
	scroll.style.display = 'flex';
	scroll.animate([
		{ opacity: 0, transform: 'scale(0.95)' },
		{ opacity: 1, transform: 'scale(1)' }
	], { duration: 300, fill: 'forwards', easing: 'ease-out' });
}

function closeScroll() {
	const scroll = document.getElementById('scroll-overlay');
	const anim = scroll.animate([
		{ opacity: 1, transform: 'scale(1)' },
		{ opacity: 0, transform: 'scale(1.05)' }
	], { duration: 250, fill: 'forwards', easing: 'ease-in' });
	anim.onfinish = () => { scroll.style.display = 'none'; };
}
