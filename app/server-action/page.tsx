'use client';
import { postMessage } from './action';
export default function Page() {
  return (
    <form
      action={async (formData) => {
        alert(await postMessage(`${formData.get('name') ?? ''}`));
      }}
    >
      <input name="name" />
      <button type="submit">submit</button>
    </form>
  );
}
