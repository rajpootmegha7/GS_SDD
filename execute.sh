echo "Building the plant database for garden shepherd..."

if psql -U postgres postgres < dbsetup.sql; then
    echo "Database has been created successfully"
    if psql garden_shepherd < schema.sql; then
    
    echo "Tables and Data is inserted properly"
    else
    echo "Exit code of $?, execution of schema.sql failed!!"
    fi

else 
echo "Exit code of $?, execution of dbsetup.sql failed!!"
fi
echo "Bash Script Execution Over"