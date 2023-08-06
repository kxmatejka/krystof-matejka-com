import styles from './attachment.module.css'

export type AttachmentProps = {
	type: 'pdf' | 'youtube'
	description: string
	previewUrl: string
	contentUrl: string
}

export function Attachment({ type, description, previewUrl, contentUrl }: AttachmentProps) {
	return (
		<div className={styles.main}>
			<a href={contentUrl} target='_blank' className={styles.link}>
				<img src={`/icons/${type}.svg`} className={styles.icon} alt='PDF' width='64'/>
			</a>
			<img src={previewUrl} alt={description} width='100%'/>
		</div>
	)
}
