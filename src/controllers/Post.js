import React, { useState, useEffect } from 'react';

import MarkDown from 'markdown-to-jsx';


function Post() {
	const file_name = 'prueba-a1.md';
	const [post, setPost] = useState('');

	useEffect(() => {
		import(`../posts/${file_name}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});

	return (
		<div>
			<MarkDown>
				{post}
			</MarkDown>
		</div>
	);
}

export default Post;