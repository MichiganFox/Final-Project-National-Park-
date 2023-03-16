-- CREATE DATABASE NPS;

-- CREATE TABLE UserProfile(
--    Id INT IDENTITY (1,1) PRIMARY KEY,
--    GoogleID NVARCHAR (max),
--    Region NVARCHAR (40),
--    UserName NVARCHAR (40),
--    Hometown NVARCHAR (60),
--    Activities NVARCHAR (max),
--    Lodging NVARCHAR (max),
--    Style NVARCHAR (max)
    
-- )

-- CREATE TABLE UserAdventureLog (
--     Id INT PRIMARY KEY IDENTITY (1,1),
--     AdventureID NVARCHAR (100),
--     UserID INT FOREIGN KEY REFERENCES UserProfile(Id)
-- )

-- CREATE TABLE AdventureLog (
--     Id INT PRIMARY KEY IDENTITY (1,1),
--     ParkID NVARCHAR (max),
--     Details NVARCHAR (max)
-- )

-- CREATE TABLE Badges(
--     Id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
--     Badge BIT,
--     BadgeIMG NVARCHAR (max)
-- )

-- CREATE TABLE UserBadges(
--     Id INT PRIMARY KEY IDENTITY (1,1) NOT NULL,
--     BadgeID INT FOREIGN KEY REFERENCES Badges (Id),
--     UserID INT FOREIGN KEY REFERENCES UserProfile (Id)
-- )

-- CREATE TABLE Favorites (
--     Id INT IDENTITY (1,1) PRIMARY KEY NOT NULL,
--     ParkID NVARCHAR (max),
--     UserID INt FOREIGN KEY REFERENCES UserProfile (Id)
-- )

