export default function Footer() {
const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <small>
        <p>
          &copy; Copyright {year}
        </p>
      </small>
    </footer>
  );
}
