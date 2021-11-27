export const onTimeout = (ms, callback) => {
	setTimeout(() => {
		callback()
	}, ms)
}

export const onTransformOut = (ele) => {
	const root = document.querySelector(`#${ele}`)
	if (root) {
		root.style.transform = 'translateY(-20px)'
	}
}

export const onMoveAnimation = (ele, animation) => {
	const root = document.querySelector(`#${ele}`)
	if (root) {
		root.style.animation = `${animation} .3s`
		root.style.animationFillMode = 'forwards'
	}
}
