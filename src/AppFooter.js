import React from 'react';

function AppFooter() {
  return (
    <footer className="bg-white border-b border-blue-700 absolute bottom-0 w-screen">
        <div className="container mx-auto px-6">
            <div className="mt-10 border-t-2 border-gray-300 flex flex-col items-center">
                <div className="sm:w-2/3 text-center py-1">
                    <p className="text-xs text-gray-300 mb-2">
                        Copyright © 2002-2020 WhiteHat Security, Inc. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
    );
}
    
export default AppFooter;