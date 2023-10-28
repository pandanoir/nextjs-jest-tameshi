'use client';
import { postMessage } from './action';
export default function Page() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        alert(await postMessage(`${formData.get('name')}`));
      }}
    >
      <input name="name" />
      <button type="submit">submit</button>
    </form>
  );
}
