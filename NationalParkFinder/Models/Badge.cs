using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class Badge
{
    public int Id { get; set; }

    public bool? Badge1 { get; set; }

    public string? BadgeImg { get; set; }

    public virtual ICollection<UserBadge> UserBadges { get; } = new List<UserBadge>();
}
