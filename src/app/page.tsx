import Image from 'next/image'
import styles from './page.module.css'

type PostProps = {
  title: string
  tags: string[]
  youtube?: string
}

function Post({title, tags, youtube}: PostProps) {
  return (
    <div className={styles.postBody}>
      <h3 className={styles.postTitle}>{title}</h3>
      <ul className={styles.postTags}>
        {tags.map((tag, i) => (<li key={i}>{tag}</li>))}
      </ul>
      {youtube && (
        <iframe width="100%" height="315" src={youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      )}
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
        title='Zelení - Pardubice z opozice'
        tags={['czech', 'talk', 'green party', 'environment', 'local politics', '2023']}
        youtube='https://www.youtube.com/embed/npMphHuY1NY'
      />
      <Post
        title='Outreach - scallable front-ends'
        tags={['english', 'presentation', 'front-end', 'monitoring', '2023']}
      />
      <Post
        title='Betsys - devops vs sre'
        tags={['czech', 'podcast', 'devops', 'sre', '2023']}
        youtube='https://www.youtube.com/embed/ShBAmqwEYNw'
      />
      </div>
    </main>
  )
}
