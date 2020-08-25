const ResetPassword = ({ valid, token }) => {
  
  
    return (
    <div>
        <h2>Forget password</h2>
        {valid ? (
          <>
            <p>Enter your new password.</p>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Set new password</button>
            </form>
          </>
        ) : (
          <p>This link may have been expired</p>
        )}
     </div>
    );
  };
  
  ResetPassword.getInitialProps = async ctx => {
    const { token } = ctx.query;
    console.log(token);
    return {token};

  };
  
  export default ResetPassword;