```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to home page with query parameter
    router.push({ pathname: '/', query: { name: 'John Doe' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  );
}
```
```javascript
// pages/index.js
import Link from 'next/link';

export default function Home({query}) {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>Name: {query.name}</p>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { query: context.query },
  };
}
```