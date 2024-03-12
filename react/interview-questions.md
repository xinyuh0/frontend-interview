# React Interview Question

## Hooks

### useState

### useEffect

Use *primitive* value instead of object in dependency array, for example:

```typescript
    // Inside a component
    const [obj, setObj] = useState({name: 'foo'})

    // Bad ❌ cause unnecessary execution
    useEffect(() => {}, [obj])

    // ✅
    useEffect(() => {}, [obj.name])

```

<br/>

`useEffect` runs *after* rendering

<br/>

Use `AbortController` to avoid *race condition* during data fetching:

```typescript
    // Inside a component with paging
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])

    useEffect(() => {
        const controller = new AbortController()

        fetch(`https://fakeapi.com/data?page=${page}`, {signal: controller.signal})
            .then((res => res.json()))
            .then((data => setData(data.body)))

        return () => { controller.abort() }

    }, [page])

```

<br/>

## React Query