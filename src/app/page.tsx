import { Attachment, AttachmentProps } from './components/atomics/attachment'
import styles from './page.module.css'

type PostProps = {
  title: string
  tags: string[]
  attachment: AttachmentProps
}

function Post({ title, tags, attachment }: PostProps) {
	return (
		<div className={styles.postBody}>
			<h3 className={styles.postTitle}>{title}</h3>
			<ul className={styles.postTags}>
				{tags.map((tag, i) => (<li key={i}>{tag}</li>))}
			</ul>
			<Attachment {...attachment}/>
		</div>
	)
}

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<h1 className={styles.pageTitle}>Krystof Matejka</h1>
				<h2 className={styles.pageSubtitle}>Site reliability engineer in the streets, data analyst in the sheets</h2>
				<Post
					title='Betsys - devops vs sre'
					tags={['czech', 'podcast', 'devops', 'sre', '2023']}
					attachment={{
						type: 'youtube',
						previewUrl: '/images/2023-betsys.webp',
						contentUrl: 'https://www.youtube.com/watch?v=ShBAmqwEYNw',
						description: 'Betsys - devops vs sre'
					}}
				/>
				<Post
					title='Outreach - scalable front-end'
					tags={['english', 'presentation', 'front-end', 'monitoring', '2023']}
					attachment={{
						type: 'pdf',
						previewUrl: '/images/2023-front-end-monitoring.webp',
						contentUrl: '/slides/2023-front-end-monitoring.pdf',
						description: 'slides for scalable front-end meetup'
					}}
				/>
				<Post
					title='Zelení - Pardubice z opozice'
					tags={['czech', 'talk', 'green party', 'environment', 'local politics', '2023']}
					attachment={{
						type: 'youtube',
						previewUrl: '/images/2023-zeleni.webp',
						contentUrl: 'https://www.youtube.com/watch?v=npMphHuY1NY',
						description: 'pardubice z opozice'
					}}
				/>
			</div>
		</main>
	)
}
