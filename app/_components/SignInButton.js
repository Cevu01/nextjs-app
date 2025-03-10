import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    //Koristimo formu zato sto ovo mora biti server komponenta, i onda koristimo server actions umesto onClick
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
