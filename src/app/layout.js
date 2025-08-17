export const metadata = {
  title: "Micah",
  // description: "Passionate about tech, music, and foreign languages"
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
