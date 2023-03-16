using System;
using System.Collections.Generic;

namespace NationalParkFinder.Models;

public partial class UserBadge
{
    public int Id { get; set; }

    public int? BadgeId { get; set; }

    public int? UserId { get; set; }

    public virtual Badge? Badge { get; set; }

    public virtual UserProfile? User { get; set; }
}
