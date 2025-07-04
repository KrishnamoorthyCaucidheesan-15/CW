
import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = () => {
  return (
    <div className="space-y-2 text-center text-sm">
      <p>
        Already have an account?{' '}
        <Link to="/login" className="text-[#917f4f] hover:underline font-medium">
          Sign in here
        </Link>
      </p>
      <p>
        Are you a wedding vendor?{' '}
        <Link to="/vendor-signup" className="text-[#917f4f] hover:underline font-medium">
          Join as a vendor
        </Link>
      </p>
    </div>
  );
};

export default AuthLinks;
