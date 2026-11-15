export function ProjectDataNotice({ status }: { status: 'loading' | 'error' }) {
  return (
    <p className="project-data-state" role={status === 'error' ? 'alert' : 'status'}>
      {status === 'loading'
        ? 'Loading project information…'
        : 'Project information is currently unavailable. Please try again later.'}
    </p>
  )
}
