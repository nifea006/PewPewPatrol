// Admin Panel Logic
document.addEventListener('DOMContentLoaded', () => {
	// Admin credentials
	const ADMIN_EMAIL = window.ADMIN_CONFIG.EMAIL;
	const ADMIN_NICKNAME = window.ADMIN_CONFIG.NICKNAME;

	// Utility to get user data
	function getUserData() {
		return JSON.parse(localStorage.getItem('userData')) || {};
	}

	// Utility to set admin state
	function isAdmin() {
		const user = getUserData();
		return user.email === ADMIN_EMAIL && user.nickname === ADMIN_NICKNAME;
	}

	// Listen for nickname/email changes to update admin state
	window.addEventListener('storage', () => {
		renderAdminPanel();
	});

	// Remove admin from leaderboard
	function filterLeaderboard() {
		let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
		leaderboard = leaderboard.filter(entry => !(entry.email === ADMIN_EMAIL && entry.nickname === ADMIN_NICKNAME));
		localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
	}

	// Clean leaderboard (all)
	function cleanLeaderboardAll() {
		localStorage.setItem('leaderboard', JSON.stringify([]));
		alert('Leaderboard cleaned!');
	}

	// Clean leaderboard (one by one)
	function cleanLeaderboardOne() {
		let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
		const names = leaderboard.map(entry => entry.nickname + ' (' + entry.email + ')');
		const toRemove = prompt('Enter nickname to remove from leaderboard:\n' + names.join('\n'));
		if (toRemove) {
			leaderboard = leaderboard.filter(entry => entry.nickname !== toRemove);
			localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
			alert('Entry removed!');
		}
	}

	// Game property toggles
	function setGameProperty(prop, value) {
		localStorage.setItem('admin_' + prop, JSON.stringify(value));
	}

	// Skip wave
	function skipWave() {
		localStorage.setItem('admin_skipWave', 'true');
		alert('Wave skipped!');
	}

	// Render admin panel UI
	function renderAdminPanel() {
		let panel = document.getElementById('adminPanel');
		if (panel) panel.remove();
		if (!isAdmin()) return;

		panel = document.createElement('div');
		panel.id = 'adminPanel';
		panel.style.position = 'fixed';
		panel.style.top = '20px';
		panel.style.right = '20px';
		panel.style.zIndex = '9999';
		panel.style.background = 'rgba(30,30,30,0.95)';
		panel.style.border = '2px solid #ff9800';
		panel.style.borderRadius = '8px';
		panel.style.padding = '16px';
		panel.style.display = 'flex';
		panel.style.flexDirection = 'column';
		panel.style.gap = '10px';
		panel.style.color = '#fff';

		panel.innerHTML = `
			<h3 style="margin:0 0 10px 0;color:#ff9800;">Admin Panel</h3>
			<button id="cleanLeaderboardAll">Clean Leaderboard (All)</button>
			<button id="cleanLeaderboardOne">Clean Leaderboard (One)</button>
			<label><input type="checkbox" id="invincibleToggle"> Green Ship Invincible</label>
			<label><input type="checkbox" id="transparentToggle"> Green Ship Transparent</label>
			<label><input type="checkbox" id="oneshotToggle"> Green Ship One-Shot Laser</label>
			<button id="skipWaveBtn">Skip Wave</button>
		`;

		document.body.appendChild(panel);

		document.getElementById('cleanLeaderboardAll').onclick = cleanLeaderboardAll;
		document.getElementById('cleanLeaderboardOne').onclick = cleanLeaderboardOne;
		document.getElementById('invincibleToggle').onchange = (e) => setGameProperty('invincible', e.target.checked);
		document.getElementById('transparentToggle').onchange = (e) => setGameProperty('transparent', e.target.checked);
		document.getElementById('oneshotToggle').onchange = (e) => setGameProperty('oneshot', e.target.checked);
		document.getElementById('skipWaveBtn').onclick = skipWave;
	}

	// Initial render
	renderAdminPanel();

	// Remove admin from leaderboard on load
	filterLeaderboard();
});
