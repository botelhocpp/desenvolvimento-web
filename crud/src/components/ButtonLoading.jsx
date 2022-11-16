export default function ButtonLoading() {
     return (
          <button class="mt-3 btn btn-warning" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
          </button>
     )
}