import ErrorBoundary from '@/components/ErrorBoundary'
import UsePromiseDemo from '@/components/UseDemo'
import fs from 'node:fs/promises'
import { Suspense } from 'react'

export default function Home() {
  const fetchUsersPromise = new Promise((resolve) => setTimeout(async () => {
    const data = await fs.readFile('dummy-db.json', 'utf8')
    const users = JSON.parse(data)
    resolve(users);
  }, 2000))
  
  return (
    <main>
      <ErrorBoundary fallback="Something went wrong!">
        <Suspense fallback={<p>Loading...</p>}>
          <UsePromiseDemo usersPromise={fetchUsersPromise} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
