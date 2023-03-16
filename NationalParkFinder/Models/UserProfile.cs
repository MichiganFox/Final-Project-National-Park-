using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class UserProfile
{
    public int Id { get; set; }

    public string? GoogleId { get; set; }

    public string? Region { get; set; }

    public string? UserName { get; set; }

    public string? Hometown { get; set; }

    public string? Activities { get; set; }

    public string? Lodging { get; set; }

    public string? Style { get; set; }

    public virtual ICollection<Favorite> Favorites { get; } = new List<Favorite>();

    public virtual ICollection<UserAdventureLog> UserAdventureLogs { get; } = new List<UserAdventureLog>();

    public virtual ICollection<UserBadge> UserBadges { get; } = new List<UserBadge>();
}
